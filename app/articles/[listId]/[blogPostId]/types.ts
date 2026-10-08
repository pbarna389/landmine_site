export type BlogPostModalType = {
	content: DocType
	id: number
}

type DocType = {
	content: (ParagraphType | HeadingType | ImageType | BulletListType)[]
	type: 'doc'
}

export type ParagraphType = {
	content: (TextType | HardBreakType)[]
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
		[key in ImageAttributes]: string
	}
	type: 'image'
}

export type HardBreakType = {
	type: 'hardBreak'
}

export type MarksType = {
	type: 'bold' | 'italic' | 'underline'
}

export type TextType = {
	text: string
	type: 'text'
	marks?: MarksType[]
}

export type ListItemType = {
	content: (ParagraphType | BulletListType)[]
	type: 'listItem'
}

export type BulletListType = {
	content: ListItemType[]
	type: 'bulletList'
}
