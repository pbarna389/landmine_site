import type { YoutubePlaylistResponse } from '@/types'

type VideoLinkProps = { item: YoutubePlaylistResponse['items'][0]['snippet'] }

export const VideoLink = ({ item }: VideoLinkProps) => {
	return <div>{item.title}</div>
}
