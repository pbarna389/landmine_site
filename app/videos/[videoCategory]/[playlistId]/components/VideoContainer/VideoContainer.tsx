'use client'

import { useParams } from 'next/navigation'

import { useEffect } from 'react'

import { useCacheStateContext, useCacheStateDispatchContext } from '@/app/context'

import { SkeletonCard } from '@/components'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { YoutubePlaylistResponse } from '@/types'

import { VideoLink } from './VideoLink'

type VideoContainerProps = YoutubePlaylistResponse

// TODO: handle loading state
// TODO: handle error state
// TODO: add skeleton loader

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
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
				{entry?.items.map((video, idx) => (
					<div
						className="relative rounded-2xl overflow-hidden transition-transform duration-250 hover:scale-105 animate-imageLoadAnim"
						key={video.id}
						ref={refIdx === idx ? ref : null}
					>
						<VideoLink item={video.snippet} />
					</div>
				))}
				{entry?.status === 'loading' && (
					<SkeletonCard
						amount={10}
						className="max-[400px]:h-45 max-[650px]:h-65 h-75 sm:h-62.5 md:h-54 lg:h-50 xl:h-40 rounded-2xl bg-white/50 animate-skeletonAnim"
					/>
				)}
			</div>
		</>
	)
}
