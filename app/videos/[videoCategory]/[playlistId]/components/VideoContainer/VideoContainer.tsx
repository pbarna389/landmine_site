'use client'

import { useParams } from 'next/navigation'

import { SkeletonCard } from '@/components'
import { useInfiniteCache } from '@/hooks/useInfiniteCache'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { fetchVideoData } from './utils'
import type { YoutubePlaylistResponse } from '@/types'

import { VideoLink } from './VideoLink'

type VideoContainerProps = YoutubePlaylistResponse

// TODO: handle error state

export const VideoContainer = ({ items, nextPageToken }: VideoContainerProps) => {
	const { playlistId } = useParams<{ playlistId: string }>()

	const { entry, updateResource } = useInfiniteCache({
		category: 'videos',
		key: playlistId,
		initialData: { items, nextPageToken },
		fetchNextPage: fetchVideoData
	})

	const { ref } = useIntersectionObserver({
		shouldFreeze:
			!entry ||
			entry.status === 'loading' ||
			entry.status === 'error' ||
			entry.status === 'exhausted',
		callback: updateResource
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
