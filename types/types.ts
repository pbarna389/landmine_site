export type IconNames = 'facebook' | 'youtube' | 'message' | 'telephone' | 'tiktok'

export type WidthValuesType =
	| 'w-full'
	| `w-${number extends number ? number : never}`
	| `w-[${number extends number ? number : never}px]`
	| `w-[${number extends number ? number : never}%]`
	| `w-[calc(${number extends number ? number : never}${'vw'}*${number extends number ? number : never}.${number extends number ? number : never})]`

export type HeightValuesType =
	| 'h-full'
	| `h-${number extends number ? number : never}`
	| `h-[${number extends number ? number : never}px]`
	| `h-[${number extends number ? number : never}%]`
	| `h-[calc(${number extends number ? number : never}${'vh'}*${number extends number ? number : never}.${number extends number ? number : never})]`

export type LinkWithIconsType = {
	href: string
	site: IconNames
	text: string
}[]

export type HeroCarouselPositionVariants = 'top' | 'middle' | 'end'

type ThumbnailKeys = 'default' | 'medium' | 'high' | 'standard' | 'maxRes'

type YoutubeThumbnails = {
	[key in ThumbnailKeys]: {
		height: number
		url: string
		width: number
	}
}

type YoutubePlaylistSnippet = {
	channelId: string
	channelTitle: string
	description: string
	playlistId: string
	position: number
	publishedAt: string
	resourceId: {
		kind: 'youtube#video'
		videoId: string
	}
	thumbnails: YoutubeThumbnails
	title: string
	videoOwnerChannelId: string
	videoOwnerChannelTitle: string
}

type YoutubeDetails = {
	etag: string
	kind: `youtube#${string}`
}

type YoutubePlayListItem = YoutubeDetails & {
	id: string
	snippet: YoutubePlaylistSnippet
}

export type YoutubePlaylistResponse = {
	items: YoutubePlayListItem[]
	nextPageToken: string | null
}
