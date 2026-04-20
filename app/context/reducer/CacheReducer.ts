import type { YoutubePlaylistResponse } from '@/types'

type BaseCacheState = YoutubePlaylistResponse & {
	nextPageToken: string | null
}

type IdleState = BaseCacheState & {
	error: null
	status: 'idle'
}

type LoadingState = BaseCacheState & {
	error: null
	status: 'loading'
}

type ExhaustedState = BaseCacheState & {
	error: null
	status: 'exhausted'
}

type ErrorState = BaseCacheState & {
	error: string
	status: 'error'
}

export type CACHE_STATE = IdleState | LoadingState | ExhaustedState | ErrorState

type CACHE_ACTION_TYPES =
	| { type: 'FETCH_START' }
	| {
			payload: { items: YoutubePlaylistResponse['items']; nextPageToken: string | null }
			type: 'FETCH_SUCCESS'
	  }
	| { payload: string; type: 'FETCH_ERROR' }

export const cacheReducer = (
	state: CACHE_STATE,
	action: CACHE_ACTION_TYPES
): CACHE_STATE => {
	switch (action.type) {
		case 'FETCH_START': {
			if (state.status === 'loading' || state.status === 'exhausted') {
				return state
			}

			return {
				...state,
				status: 'loading',
				error: null
			}
		}
		case 'FETCH_SUCCESS': {
			const newList = [...state.items, ...action.payload.items]
			const nextToken = action.payload.nextPageToken

			if (!nextToken) {
				return {
					status: 'exhausted',
					items: newList,
					nextPageToken: null,
					error: null
				}
			}

			return {
				status: 'idle',
				items: newList,
				nextPageToken: nextToken,
				error: null
			}
		}
		case 'FETCH_ERROR': {
			return {
				status: 'error',
				items: state.items,
				nextPageToken: state.nextPageToken,
				error: action.payload
			}
		}
		default:
			return state
	}
}
