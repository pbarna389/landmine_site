import { hasNextPage } from '@/utils'

type BaseCacheState<T> = {
	items: T[]
	pagination: PaginationState | null
}

export type PaginationState =
	| { kind: 'token'; nextPageToken: string | null }
	| {
			kind: 'page'
			pageInfo: {
				currentPage: number
				maxPage: number
				pageSize: number
			} | null
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

export type CACHE_STATE<T> = Record<string, CacheEntry<T> | undefined>

export type CACHE_ACTION_TYPES<T> =
	| { payload: { category: CACHE_CATEGORY; key: string }; type: 'FETCH_START' }
	| {
			payload: {
				category: CACHE_CATEGORY
				items: T[]
				key: string
				pagination: PaginationState
			}
			type: 'FETCH_SUCCESS'
	  }
	| {
			payload: {
				category: CACHE_CATEGORY
				items: T[]
				key: string
				pagination: PaginationState
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
							pagination: null,
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
			const { key, items, pagination, category } = action.payload

			const cacheCategory = state[category]

			const cacheEntry = cacheCategory?.[key]

			if (cacheEntry) {
				return state
			}

			const canContinue = hasNextPage(pagination)

			return {
				...state,
				[category]: {
					...cacheCategory,
					[key]: {
						status: canContinue ? 'idle' : 'exhausted',
						items,
						pagination,
						error: null
					}
				}
			}
		}
		case 'FETCH_SUCCESS': {
			const { key, category, pagination } = action.payload

			const cacheCategory = state[category]
			const cacheEntry = cacheCategory?.[key]

			const canLoadMore = hasNextPage(pagination)

			if (!cacheEntry) {
				return {
					...state,
					[category]: {
						...cacheCategory,
						[key]: {
							status: canLoadMore ? 'idle' : 'exhausted',
							items: action.payload.items,
							pagination,
							error: null
						}
					}
				}
			}

			const newList = [...cacheEntry.items, ...action.payload.items]

			if (!canLoadMore) {
				return {
					...state,
					[category]: {
						...cacheCategory,
						[key]: {
							status: 'exhausted',
							items: newList,
							pagination: null,
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
						pagination,
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
							pagination: null,
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
						pagination: cacheEntry.pagination,
						error: errorMessage
					}
				}
			}
		}
		default:
			return state
	}
}
