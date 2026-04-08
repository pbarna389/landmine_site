'use client'

import type { YoutubePlaylistResponse } from '@/types'

import { VideoLink } from './VideoLink'

type VideoContainerProps = YoutubePlaylistResponse

//TODO: implement the intersection hook
//TODO: implement storage
//TODO: implement infinite scrolling logic
//TODO: move storage out to upper levels
//TODO: implement client-side caching OR use SWR for client side caching

export const VideoContainer = ({ items, nextPageToken }: VideoContainerProps) => {
	return (
		<>
			<div className="flex flex-wrap gap-5 items-center justify-evenly">
				{items.map((item) => (
					<VideoLink key={item.id} item={item.snippet} />
				))}
			</div>
			{nextPageToken && (
				<p>There are more pages to load - no intersection observer to handle it yet</p>
			)}
		</>
	)
}
