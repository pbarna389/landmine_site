export type BlogPostModalType = {
	content: DocType
	date: `${number}-${number}-${number}`
	id: number
}

type DocType = {
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
