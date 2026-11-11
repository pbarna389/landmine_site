import { type ArticleCardType, articleResponseSchema } from '@/app/schemas'

import type { PaginationState } from '@/types'

export type FetchArticleDataParams = {
	currentPage: number
	id: string
	pageSize: number
}

export const fetchArticleData = async (
	params: { currentPage: number; id: string; pageSize: number },
	pagination: PaginationState
): Promise<{ items: ArticleCardType[]; pagination: PaginationState }> => {
	const nextPageToken = pagination.kind === 'page' ? pagination.pageInfo : undefined

	const { currentPage, pageSize, id } = params

	if (!nextPageToken) {
		throw new Error('No token is provided')
	}

	const data = await fetch(
		`/api/articles?listId=${id}&page=${currentPage}&pageSize=${pageSize}`
	)

	if (!data.ok) {
		throw new Error(`Request failed with status ${data.status}`)
	}

	const response = articleResponseSchema.safeParse(await data.json())

	if (!response.success) {
		throw new Error(`Article API response parsing failed!`)
	}

	const newPagination: PaginationState = {
		kind: 'page',
		pageInfo: response.data.pagination ?? null
	}

	const updatedResponseFormat = {
		items: response.data.items,
		pagination: newPagination
	}

	return updatedResponseFormat
}
