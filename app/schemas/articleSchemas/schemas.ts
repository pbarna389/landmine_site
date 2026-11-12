import { z } from 'zod'

import { paginationSchema, staticImageDataSchema } from '../shared/schemas'

export const tagSchema = z.enum(['theory', 'philosophy', 'advices', 'facts', 'music'])

export const articleListIdParamSchema = z.enum([...tagSchema.options, 'all'])

export const articleCardSchema = z.object({
	date: z.string(),
	id: z.number(),
	img: staticImageDataSchema,
	tags: z.array(tagSchema),
	text: z.string(),
	title: z.string()
})

export const articleCardListSchema = z.array(articleCardSchema)

export const articleResponseSchema = z.object({
	items: articleCardListSchema,
	pagination: paginationSchema
})

export type ArticleCardType = z.infer<typeof articleCardSchema>

export type ArticleCardCollectionType = z.infer<typeof articleCardListSchema>

export type ArticleTagTypes = z.infer<typeof tagSchema>

export type ArticleListIdParamType = z.infer<typeof articleListIdParamSchema>
