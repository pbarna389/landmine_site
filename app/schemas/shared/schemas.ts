import { z } from 'zod'

export const paginationSchema = z.object({
	pageSize: z.number(),
	currentPage: z.number(),
	maxPage: z.number()
})

export type PaginationBase = z.infer<typeof paginationSchema>
