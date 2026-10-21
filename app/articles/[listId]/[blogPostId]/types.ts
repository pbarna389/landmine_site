import type { DocType } from '@/types'

export type BlogPostModalType = {
	content: DocType
	date: `${number}-${number}-${number}`
	id: number
	tags: string[]
}
