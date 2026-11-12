import { cache } from 'react'

import type { ArticleListIdParamType } from '@/app/schemas'

import { paginateItems, validateRequest } from '@/utils'
import { INVALID_REQUEST_RESULT } from '@/constants/constants'

import { getArticlesLayoutContentMock, getArticlesListMock } from './articles.mock'

export const getArticleContent = async (id: string) => {
	const articles = await getArticlesListMock()

	return id === 'all'
		? articles
		: articles.filter((article) =>
				article.tags.includes(id as Exclude<ArticleListIdParamType, 'all'>)
			)
}

export const getArticlePaginatedContent = cache(
	async (id: string, pageSize: number, nextPage = 1) => {
		const articles = await getArticlesListMock()

		const selectedCategoryArticles =
			id === 'all'
				? articles
				: articles.filter((article) =>
						article.tags.includes(id as Exclude<ArticleListIdParamType, 'all'>)
					)

		if (!Number.isInteger(pageSize) || pageSize <= 0) return INVALID_REQUEST_RESULT

		const maxPage = !selectedCategoryArticles.length
			? 1
			: Math.ceil(selectedCategoryArticles.length / pageSize)

		const isValidRequest = validateRequest(nextPage, pageSize, maxPage)

		if (!isValidRequest) return INVALID_REQUEST_RESULT

		return paginateItems(selectedCategoryArticles, nextPage, pageSize, maxPage)
	}
)

export const getArticlesLayoutContent = async () => {
	const result = await getArticlesLayoutContentMock()

	return result
}
