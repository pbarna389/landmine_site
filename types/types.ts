export type IconNames =
	| 'facebook'
	| 'youtube'
	| 'message'
	| 'telephone'
	| 'tiktok'
	| 'arrowUp'
	| 'home'
	| 'chevronLeft'
	| 'chevronDown'

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

type YoutubeStatus = {
	privacyStatus: 'private' | 'public' | 'unlisted'
}

type YoutubePlayListItem = YoutubeDetails & {
	id: string
	snippet: YoutubePlaylistSnippet
	status: YoutubeStatus
}

export type YoutubePlaylistResponse = {
	items: YoutubePlayListItem[]
	nextPageToken: string | null
}

export type InputKeysType = 'text' | 'email' | 'textarea'

export type DocType = {
	content: (ParagraphType | HeadingType | ImageType | BulletListType | OrderedListType)[]
	type: 'doc'
}

export type ParagraphType = {
	content: (TextType | HardBreakType | ImageType)[]
	type: 'paragraph'
}

export type HeadingType = {
	attrs: {
		level: 1 | 2 | 3 | 4 | 5 | 6
	}
	content: TextType[]
	type: 'heading'
}

type ImageAttributes = 'alt' | 'src' | 'title'

export type ImageType = {
	attrs: {
		[key in Exclude<ImageAttributes, 'title'>]: string
	} & {
		title?: string
	}
	type: 'image'
}

export type HardBreakType = {
	type: 'hardBreak'
}

export type MarksType =
	| {
			type: 'bold' | 'italic' | 'underline'
	  }
	| {
			attrs: {
				backgroundColor?: `#${string}${string}${string}${string}${string}${string}`
				color?: `#${string}${string}${string}${string}${string}${string}`
				fontSize?: `${number}px`
			}
			type: 'textStyle'
	  }

export type TextType = {
	text: string
	type: 'text'
	marks?: MarksType[]
}

export type ListItemType = {
	content: (ParagraphType | BulletListType | OrderedListType)[]
	type: 'listItem'
}

export type BulletListType = {
	content: ListItemType[]
	type: 'bulletList'
}

export type OrderedListType = {
	content: ListItemType[]
	type: 'orderedList'
}
