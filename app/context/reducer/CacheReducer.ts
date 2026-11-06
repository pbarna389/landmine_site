type BaseCacheState<T> = {
	items: T[]
	nextPageToken: string | null
}

type IdleState<T> = BaseCacheState<T> & {
	error: null
	status: 'idle'
}

type LoadingState<T> = BaseCacheState<T> & {
	error: null
	status: 'loading'
}

type ExhaustedState<T> = BaseCacheState<T> & {
	error: null
	status: 'exhausted'
}

type ErrorState<T> = BaseCacheState<T> & {
	error: string
	status: 'error'
}

type CacheEntry<T> = {
	[key: string]: IdleState<T> | LoadingState<T> | ExhaustedState<T> | ErrorState<T>
}

export type CACHE_CATEGORY = 'videos' | 'music' | 'articles'

export type CACHE_STATE<T> = Record<CACHE_CATEGORY, CacheEntry<T> | undefined>

export type CACHE_ACTION_TYPES<T> =
	| { payload: { category: CACHE_CATEGORY; key: string }; type: 'FETCH_START' }
	| {
			payload: {
				category: CACHE_CATEGORY
				items: T[]
				key: string
				nextPageToken: string | null
			}
			type: 'FETCH_SUCCESS'
	  }
	| {
			payload: {
				category: CACHE_CATEGORY
				items: T[]
				key: string
				nextPageToken: string | null
			}
			type: 'INIT_RESOURCE'
	  }
	| {
			payload: { category: CACHE_CATEGORY; errorMessage: string; key: string }
			type: 'FETCH_ERROR'
	  }

export const cacheReducer = <T>(
	state: CACHE_STATE<T>,
	action: CACHE_ACTION_TYPES<T>
): CACHE_STATE<T> => {
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
		case 'INIT_RESOURCE': {
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
