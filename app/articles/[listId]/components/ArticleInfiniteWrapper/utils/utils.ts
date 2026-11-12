import { type ArticleCardType, articleResponseSchema } from '@/app/schemas'

import type { PaginationState } from '@/types'

export type FetchArticleDataParams = {
	id: string
}

export const fetchArticleData = async (
	params: { id: string },
	pagination: PaginationState
): Promise<{ items: ArticleCardType[]; pagination: PaginationState }> => {
	const nextPageInfo = pagination.kind === 'page' ? pagination.pageInfo : undefined

	const { id } = params

	if (!nextPageInfo) {
		throw new Error('Invalid page pagination state')
	}

	const nextPage = nextPageInfo.currentPage + 1

	const data = await fetch(
		`/api/articles?listId=${id}&currentPage=${nextPage}&pageSize=${nextPageInfo.pageSize}`
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
		pageInfo: response.data.pagination
	}

	const updatedResponseFormat = {
		items: response.data.items,
		pagination: newPagination
	}

	return updatedResponseFormat
}
