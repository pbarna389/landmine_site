'use client'

import { useParams } from 'next/navigation'

import { useEffect, useReducer } from 'react'

import { type CACHE_STATE, cacheReducer } from '@/app/context'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { YoutubePlaylistResponse } from '@/types'

import { VideoLink } from './VideoLink'

type VideoContainerProps = YoutubePlaylistResponse

//TODO: implement client-side caching

const initialState: CACHE_STATE = {
	status: 'idle',
	items: [],
	nextPageToken: null,
	error: null
}

export const VideoContainer = ({ items, nextPageToken }: VideoContainerProps) => {
	const { playlistId } = useParams<{ playlistId: string }>()

	const [state, dispatch] = useReducer(cacheReducer, initialState)

	useEffect(() => {
		dispatch({ type: 'FETCH_SUCCESS', payload: { items, nextPageToken } })
	}, [items, nextPageToken])

	const updateVideos = async () => {
		if (
			!state.nextPageToken ||
			state.status === 'loading' ||
			state.status === 'exhausted' ||
			!playlistId
		) {
			return
		}

		dispatch({ type: 'FETCH_START' })

		try {
			const data = await fetch(
				`/api/videos?playlistId=${playlistId}&pageToken=${state.nextPageToken}`
			)

			if (!data.ok) {
				throw new Error('Request failed with status ${data.status}')
			}

			const response = (await data.json()) as YoutubePlaylistResponse

			dispatch({
				type: 'FETCH_SUCCESS',
				payload: {
					items: response.items,
					nextPageToken: response.nextPageToken
				}
			})
		} catch (err) {
			dispatch({
				type: 'FETCH_ERROR',
				payload: err instanceof Error ? err.message : 'Unknown error'
			})
		}
	}

	const { ref } = useIntersectionObserver({
		shouldFreeze:
			!state.nextPageToken || state.status === 'error' || state.status === 'exhausted',
		callback: updateVideos
	})

	return (
		<>
			<div ref={ref} className="flex flex-wrap gap-5 items-center justify-evenly">
				{state.items.map((video) => (
					<VideoLink key={video.id} item={video.snippet} />
				))}
			</div>
			{state.nextPageToken && (
				<p>There are more pages to load - storage should be implemented</p>
			)}
		</>
	)
}
