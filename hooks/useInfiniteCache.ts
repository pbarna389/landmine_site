import { useEffect } from 'react'

import { useCacheStateContext, useCacheStateDispatchContext } from '@/app/context'

import { hasNextPage } from '@/utils'

import type {
	CACHE_CATEGORY,
	CACHE_STATE,
	PaginationState
} from './../app/context/reducer/CacheReducer'

type ResourceEntry<T> = NonNullable<CACHE_STATE<T>[string]>[string]

export const useInfiniteCache = <DataType>({
	category,
	initialData,
	key,
	fetchNextPage
}: {
	category: CACHE_CATEGORY
	fetchNextPage: (id: string, pagination: PaginationState) => Promise<Response>
	initialData: {
		items: DataType[]
		pagination: PaginationState
	}
	key: string
}) => {
	const state = useCacheStateContext()

	const dispatch = useCacheStateDispatchContext()

	const entry = state[category]?.[key] as ResourceEntry<DataType> | undefined

	const { items, pagination } = initialData

	useEffect(() => {
		dispatch({
			type: 'INIT_RESOURCE',
			payload: {
				key,
				category,
				items,
				pagination
			}
		})
	}, [dispatch, items, pagination, key, category])

	const updateResource = async () => {
		if (!entry) {
			return
		}

		const canContinue = hasNextPage(entry.pagination)

		if (!canContinue || entry.status === 'loading') {
			return
		}

		dispatch({ type: 'FETCH_START', payload: { key, category } })

		try {
			if (!entry.pagination)
				throw new Error('no pagination provided when the logic expects it')

			const data = await fetchNextPage(key, entry.pagination)

			const response = (await data.json()) as {
				items: DataType[]
				nextPageToken?: string | null
			}

			dispatch({
				type: 'FETCH_SUCCESS',
				payload: {
					key,
					category,
					items: response.items,
					pagination: {
						kind: 'token',
						nextPageToken: response.nextPageToken ?? null
					}
				}
			})
		} catch (err) {
			dispatch({
				type: 'FETCH_ERROR',
				payload: {
					category,
					key,
					errorMessage: err instanceof Error ? err.message : 'Unknown error'
				}
			})
		}
	}

	const message = `use infinite cache initialized with category: ${category}, key: ${key}`

	return { message, entry, updateResource }
}
