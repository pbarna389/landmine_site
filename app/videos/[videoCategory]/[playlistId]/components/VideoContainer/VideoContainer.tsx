'use client'

import { useParams } from 'next/navigation'

import { useEffect } from 'react'

import { useCacheStateContext, useCacheStateDispatchContext } from '@/app/context'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { YoutubePlaylistResponse } from '@/types'

import { VideoLink } from './VideoLink'

type VideoContainerProps = YoutubePlaylistResponse

// TODO: handle loading state
// TODO: handle error state
// TODO: add skeleton loader
// TODO: update styling

export const VideoContainer = ({ items, nextPageToken }: VideoContainerProps) => {
	const { playlistId } = useParams<{ playlistId: string }>()

	const state = useCacheStateContext()
	const dispatch = useCacheStateDispatchContext()

	const entry = state[playlistId]

	useEffect(() => {
		dispatch({
			type: 'INIT_PLAYLIST',
			payload: {
				key: playlistId,
				items,
				nextPageToken
			}
		})
	}, [dispatch, items, nextPageToken, playlistId])

	const updateVideos = async () => {
		if (!entry) {
			return
		}

		if (!entry.nextPageToken || entry.status === 'loading') {
			return
		}

		dispatch({ type: 'FETCH_START', payload: { key: playlistId } })

		try {
			const data = await fetch(
				`/api/videos?playlistId=${playlistId}&pageToken=${entry.nextPageToken}`
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
			!entry ||
			entry.status === 'loading' ||
			entry.status === 'error' ||
			entry.status === 'exhausted',
		callback: updateVideos
	})

	const refIdx = entry?.items?.length ? entry?.items?.length - 1 : 0

	return (
		<>
			<div className="flex flex-wrap gap-5 items-center">
				{entry?.items.map((video, idx) => (
					<div
						className="relative rounded-2xl overflow-hidden transition-transform duration-250 hover:scale-105"
						key={video.id}
						ref={refIdx === idx ? ref : null}
					>
						<VideoLink item={video.snippet} />
					</div>
				))}
			</div>
			{entry?.nextPageToken && (
				<p>There are more pages to load - storage should be implemented</p>
			)}
		</>
	)
}
