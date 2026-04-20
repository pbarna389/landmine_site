'use client'

import { useParams } from 'next/navigation'

import { useEffect } from 'react'

import { useCacheStateContext, useCacheStateDispatchContext } from '@/app/context'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { YoutubePlaylistResponse } from '@/types'

import { VideoLink } from './VideoLink'

type VideoContainerProps = YoutubePlaylistResponse

export const VideoContainer = ({ items, nextPageToken }: VideoContainerProps) => {
	const { playlistId } = useParams<{ playlistId: string }>()

	const state = useCacheStateContext()
	const dispatch = useCacheStateDispatchContext()

	useEffect(() => {
		if (!state) {
			dispatch({
				type: 'FETCH_SUCCESS',
				payload: {
					key: playlistId,
					items,
					nextPageToken
				}
			})
		}
	}, [state, dispatch, items, nextPageToken, playlistId])

	const updateVideos = async () => {
		if (!state[playlistId]) {
			dispatch({
				type: 'FETCH_SUCCESS',
				payload: {
					key: playlistId,
					items,
					nextPageToken
				}
			})
		}

		if (
			!state[playlistId]?.nextPageToken ||
			state[playlistId].status === 'loading' ||
			state[playlistId].status === 'exhausted' ||
			!playlistId
		) {
			return
		}

		dispatch({ type: 'FETCH_START', payload: { key: playlistId } })

		try {
			const data = await fetch(
				`/api/videos?playlistId=${playlistId}&pageToken=${state[playlistId].nextPageToken}`
			)

			if (!data.ok) {
				throw new Error('Request failed with status ${data.status}')
			}

			const response = (await data.json()) as YoutubePlaylistResponse

			dispatch({
				type: 'FETCH_SUCCESS',
				payload: {
					key: playlistId,
					items: response.items,
					nextPageToken: response.nextPageToken
				}
			})
		} catch (err) {
			dispatch({
				type: 'FETCH_ERROR',
				payload: {
					errorMessage: err instanceof Error ? err.message : 'Unknown error',
					key: playlistId
				}
			})
		}
	}

	const { ref } = useIntersectionObserver({
		shouldFreeze:
			!state[playlistId] ||
			state[playlistId].status === 'error' ||
			state[playlistId].status === 'exhausted',
		callback: updateVideos
	})

	return (
		<>
			<div ref={ref} className="flex flex-wrap gap-5 items-center justify-evenly">
				{state[playlistId]?.items.map((video) => (
					<VideoLink key={video.id} item={video.snippet} />
				))}
			</div>
			{state[playlistId]?.nextPageToken && (
				<p>There are more pages to load - storage should be implemented</p>
			)}
		</>
	)
}
