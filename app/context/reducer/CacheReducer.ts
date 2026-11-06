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

type CacheEntry = {
	[key: string]: IdleState | LoadingState | ExhaustedState | ErrorState
}

type CacheCategory = 'videos' | 'music' | 'articles'

export type CACHE_STATE = Record<CacheCategory, CacheEntry | undefined>

export type CACHE_ACTION_TYPES =
	| { payload: { category: CacheCategory; key: string }; type: 'FETCH_START' }
	| {
			payload: {
				category: CacheCategory
				items: YoutubePlaylistResponse['items']
				key: string
				nextPageToken: string | null
			}
			type: 'FETCH_SUCCESS'
	  }
	| {
			payload: {
				category: CacheCategory
				items: YoutubePlaylistResponse['items']
				key: string
				nextPageToken: string | null
			}
			type: 'INIT_PLAYLIST'
	  }
	| {
			payload: { category: CacheCategory; errorMessage: string; key: string }
			type: 'FETCH_ERROR'
	  }

export const cacheReducer = (
	state: CACHE_STATE,
	action: CACHE_ACTION_TYPES
): CACHE_STATE => {
	switch (action.type) {
		case 'FETCH_START': {
			const { key, category } = action.payload

			const cacheCategory = state[category]

			const cacheEntry = cacheCategory?.[key]

			if (!cacheEntry) {
				return {
					...state,
					[category]: {
						...cacheCategory,
						[key]: {
							status: 'loading',
							items: [],
							nextPageToken: null,
							error: null
						}
					}
				}
			}

			if (cacheEntry.status === 'loading' || cacheEntry.status === 'exhausted') {
				return state
			}

			return {
				...state,
				[category]: {
					...cacheCategory,
					[key]: {
						...cacheEntry,
						status: 'loading',
						error: null
					}
				}
			}
		}
		case 'INIT_PLAYLIST': {
			const { key, items, nextPageToken, category } = action.payload

			const cacheCategory = state[category]

			const cacheEntry = cacheCategory?.[key]

			if (cacheEntry) {
				return state
			}

			return {
				...state,
				[category]: {
					...cacheCategory,
					[key]: {
						status: 'idle',
						items,
						nextPageToken,
						error: null
					}
				}
			}
		}
		case 'FETCH_SUCCESS': {
			const { key, category } = action.payload

			const cacheCategory = state[category]

			const cacheEntry = cacheCategory?.[key]

			if (!cacheEntry) {
				return {
					...state,
					[category]: {
						...cacheCategory,
						[key]: {
							status: action.payload.nextPageToken ? 'idle' : 'exhausted',
							items: action.payload.items,
							nextPageToken: action.payload.nextPageToken,
							error: null
						}
					}
				}
			}

			const newList = [...cacheEntry.items, ...action.payload.items]
			const nextToken = action.payload.nextPageToken

			if (!nextToken) {
				return {
					...state,
					[category]: {
						...cacheCategory,
						[key]: {
							status: 'exhausted',
							items: newList,
							nextPageToken: null,
							error: null
						}
					}
				}
			}

			return {
				...state,
				[category]: {
					...cacheCategory,
					[key]: {
						status: 'idle',
						items: newList,
						nextPageToken: nextToken,
						error: null
					}
				}
			}
		}
		case 'FETCH_ERROR': {
			const { key, errorMessage, category } = action.payload

			const cacheCategory = state[category]

			const cacheEntry = cacheCategory?.[key]

			if (!cacheEntry) {
				return {
					...state,
					[category]: {
						...cacheCategory,
						[key]: {
							status: 'error',
							items: [],
							nextPageToken: null,
							error: errorMessage
						}
					}
				}
			}

			return {
				...state,
				[category]: {
					...cacheCategory,
					[key]: {
						status: 'error',
						items: cacheEntry.items,
						nextPageToken: cacheEntry.nextPageToken,
						error: errorMessage
					}
				}
			}
		}
		default:
			return state
	}
}
