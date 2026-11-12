import { useEffect } from 'react'

import { useCacheStateContext, useCacheStateDispatchContext } from '@/app/context'

import { hasNextPage } from '@/utils'
import type { PaginationState } from '@/types'

import type { CACHE_CATEGORY, CACHE_STATE } from './../app/context/reducer/CacheReducer'

type ResourceEntry<T> = NonNullable<CACHE_STATE<T>[string]>[string]

export const useInfiniteCache = <DataType, FetchNextPageParams extends { id: string }>({
	category,
	initialData,
	fetchParams,
	fetchNextPage
}: {
	category: CACHE_CATEGORY
	fetchNextPage: (
		params: FetchNextPageParams,
		pagination: PaginationState
	) => Promise<{ items: DataType[]; pagination: PaginationState }>
	fetchParams: FetchNextPageParams
	initialData: {
		items: DataType[]
		pagination: PaginationState
	}
}) => {
	const state = useCacheStateContext()

	const dispatch = useCacheStateDispatchContext()

	const entry = state[category]?.[fetchParams.id] as ResourceEntry<DataType> | undefined

	const { items, pagination } = initialData

	useEffect(() => {
		dispatch({
			type: 'INIT_RESOURCE',
			payload: {
				key: fetchParams.id,
				category,
				items,
				pagination
			}
		})
	}, [dispatch, items, pagination, fetchParams.id, category])

	const updateResource = async () => {
		if (!entry) {
			return
		}

		const canContinue = hasNextPage(entry.pagination)

		if (!entry.pagination || !canContinue || entry.status === 'loading') {
			return
		}

		dispatch({ type: 'FETCH_START', payload: { key: fetchParams.id, category } })

		try {
			if (!entry.pagination)
				throw new Error('no pagination provided when the logic expects it')

			const data = await fetchNextPage(fetchParams, entry.pagination)

			dispatch({
				type: 'FETCH_SUCCESS',
				payload: {
					key: fetchParams.id,
					category,
					items: data.items,
					pagination: data.pagination
				}
			})
		} catch (err) {
			dispatch({
				type: 'FETCH_ERROR',
				payload: {
					category,
					key: fetchParams.id,
					errorMessage: err instanceof Error ? err.message : 'Unknown error'
				}
			})
		}
	}

	const message = `use infinite cache initialized with category: ${category}, key: ${fetchParams.id}`

	return { message, entry, updateResource }
}
