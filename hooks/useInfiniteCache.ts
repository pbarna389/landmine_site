import { useEffect } from 'react'

import { useCacheStateContext, useCacheStateDispatchContext } from '@/app/context'

import type { YoutubePlayListItem, YoutubePlaylistResponse } from '@/types'

import type { CACHE_CATEGORY } from './../app/context/reducer/CacheReducer'
export const useInfiniteCache = ({
	category,
	initialData,
	key,
	fetchNextPage
}: {
	category: CACHE_CATEGORY
	fetchNextPage: (id: string, pageToken: string) => Promise<Response>
	initialData: {
		items: YoutubePlayListItem[]
		nextPageToken: string | null
	}
	key: string
}) => {
	const state = useCacheStateContext()

	const dispatch = useCacheStateDispatchContext()

	const entry = state[category]?.[key]

	const { items, nextPageToken } = initialData

	useEffect(() => {
		dispatch({
			type: 'INIT_RESOURCE',
			payload: {
				key,
				category,
				items,
				nextPageToken
			}
		})
	}, [dispatch, items, nextPageToken, key, category])

	const updateResource = async () => {
		if (!entry) {
			return
		}

		if (!entry.nextPageToken || entry.status === 'loading') {
			return
		}

		dispatch({ type: 'FETCH_START', payload: { key, category } })

		try {
			const data = await fetchNextPage(key, entry.nextPageToken)

			const response = (await data.json()) as YoutubePlaylistResponse

			dispatch({
				type: 'FETCH_SUCCESS',
				payload: {
					key,
					category,
					items: response.items,
					nextPageToken: response.nextPageToken
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
