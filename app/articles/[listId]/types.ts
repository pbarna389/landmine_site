import type { StaticImageData } from 'next/image'

export type TagTypes = 'theory' | 'philosophy' | 'advices' | 'facts' | 'music'

export type ListIdParamType = TagTypes | 'all'

export type ArticleCardType = {
	date: string
	id: number
	img: StaticImageData
	tags: TagTypes[]
	text: string
	title: string
}
