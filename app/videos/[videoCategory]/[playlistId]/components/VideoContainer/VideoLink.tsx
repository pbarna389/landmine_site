import Image from 'next/image'
import Link from 'next/link'

import type { YoutubePlaylistResponse } from '@/types'

import defaultImage from '../../../../../../public/6640187.jpg'

type VideoLinkProps = { item: YoutubePlaylistResponse['items'][0]['snippet'] }

// TODO: add dynamic width and height

export const VideoLink = ({ item }: VideoLinkProps) => {
	const imageSrc = item.thumbnails.high ? item.thumbnails.high.url : defaultImage

	return (
		<Link href={`https://youtube.com/watch?v=${item.resourceId.videoId}`} target="_blank">
			<Image
				alt={item.title}
				src={imageSrc}
				loading="eager"
				width={300}
				height={300}
				style={{ width: 'auto', height: 'auto' }}
			/>
		</Link>
	)
}
