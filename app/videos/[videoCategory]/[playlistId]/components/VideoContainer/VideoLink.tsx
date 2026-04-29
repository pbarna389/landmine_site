import Image from 'next/image'
import Link from 'next/link'

import type { YoutubePlaylistResponse } from '@/types'

import defaultImage from '../../../../../../public/6640187.jpg'

type VideoLinkProps = { item: YoutubePlaylistResponse['items'][0]['snippet'] }

export const VideoLink = ({ item }: VideoLinkProps) => {
	const imageSrc = item.thumbnails.high ? item.thumbnails.high.url : defaultImage

	return (
		<Link
			className="max-[400px]:h-45 max-[650px]:h-65 h-75 sm:h-62.5 md:h-54 lg:h-50 xl:h-40 relative block"
			href={`https://youtube.com/watch?v=${item.resourceId.videoId}`}
			target="_blank"
		>
			<Image alt={item.title} src={imageSrc} loading="eager" fill />
		</Link>
	)
}
