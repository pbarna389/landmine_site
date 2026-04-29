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

type CacheEntry = IdleState | LoadingState | ExhaustedState | ErrorState

export type CACHE_STATE = Record<string, CacheEntry | undefined>

export type CACHE_ACTION_TYPES =
	| { payload: { key: string }; type: 'FETCH_START' }
	| {
			payload: {
				items: YoutubePlaylistResponse['items']
				key: string
				nextPageToken: string | null
			}
			type: 'FETCH_SUCCESS'
	  }
	| {
			payload: {
				items: YoutubePlaylistResponse['items']
				key: string
				nextPageToken: string | null
			}
			type: 'INIT_PLAYLIST'
	  }
	| { payload: { errorMessage: string; key: string }; type: 'FETCH_ERROR' }

export const cacheReducer = (
	state: CACHE_STATE,
	action: CACHE_ACTION_TYPES
): CACHE_STATE => {
	switch (action.type) {
		case 'FETCH_START': {
			const { key } = action.payload

			const cacheEntry = state[key]

			if (!cacheEntry) {
				return {
					...state,
					[key]: {
						status: 'loading',
						items: [],
						nextPageToken: null,
						error: null
					}
				}
			}

			if (cacheEntry.status === 'loading' || cacheEntry.status === 'exhausted') {
				return state
			}

			return {
				...state,
				[key]: {
					...cacheEntry,
					status: 'loading',
					error: null
				}
			}
		}
		case 'INIT_PLAYLIST': {
			const { key, items, nextPageToken } = action.payload

			if (state[key]) {
				return state
			}

			return {
				...state,
				[key]: {
					status: 'idle',
					items,
					nextPageToken,
					error: null
				}
			}
		}
		case 'FETCH_SUCCESS': {
			const { key } = action.payload

			const cacheEntry = state[key]

			if (!cacheEntry) {
				return {
					...state,
					[key]: {
						status: action.payload.nextPageToken ? 'idle' : 'exhausted',
						items: action.payload.items,
						nextPageToken: action.payload.nextPageToken,
						error: null
					}
				}
			}

			const newList = [...cacheEntry.items, ...action.payload.items]
			const nextToken = action.payload.nextPageToken

			if (!nextToken) {
				return {
					...state,
					[key]: {
						status: 'exhausted',
						items: newList,
						nextPageToken: null,
						error: null
					}
				}
			}

			return {
				...state,
				[key]: {
					status: 'idle',
					items: newList,
					nextPageToken: nextToken,
					error: null
				}
			}
		}
		case 'FETCH_ERROR': {
			const { key, errorMessage } = action.payload

			const cacheEntry = state[key]

			if (!cacheEntry) {
				return {
					...state,
					[key]: {
						status: 'error',
						items: [],
						nextPageToken: null,
						error: errorMessage
					}
				}
			}

			return {
				...state,
				[key]: {
					status: 'error',
					items: cacheEntry.items,
					nextPageToken: cacheEntry.nextPageToken,
					error: errorMessage
				}
			}
		}
		default:
			return state
	}
}
