import { z } from 'zod'

export const paginationSchema = z.object({
	pageSize: z.number(),
	currentPage: z.number(),
	maxPage: z.number()
})

export type PaginationBase = z.infer<typeof paginationSchema>

export const staticImageDataSchema = z.object({
	src: z.string(),
	height: z.number(),
	width: z.number(),
	blurDataURL: z.string().optional(),
	blurWidth: z.number().optional(),
	blurHeight: z.number().optional()
})
