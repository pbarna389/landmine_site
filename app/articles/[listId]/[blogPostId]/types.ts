export type BlogPostModalType = {
	content: DocType
	id: number
}

type DocType = {
	content: (ParagraphType | HeadingType | ImageType | BulletListType)[]
	type: 'doc'
}

type ParagraphType = {
	content: (TextType | HardBreakType)[]
	type: 'paragraph'
}

type HeadingType = {
	attrs: {
		level: 1 | 2 | 3 | 4 | 5 | 6
	}
	content: TextType[]
	type: 'heading'
}

type ImageAttributes = 'alt' | 'src' | 'title'

type ImageType = {
	attrs: {
		[key in ImageAttributes]: string
	}
	type: 'image'
}

type HardBreakType = {
	type: 'hardBreak'
}

type MarksType = {
	type: 'bold' | 'italic' | 'underline'
}

type TextType = {
	text: string
	type: 'text'
	marks?: MarksType[]
}

type ListItemType = {
	content: (ParagraphType | BulletListType)[]
	type: 'listItem'
}

type BulletListType = {
	content: ListItemType[]
	type: 'bulletList'
}
