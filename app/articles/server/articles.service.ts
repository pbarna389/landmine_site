import { getArticlesLayoutContentMock, getArticlesListMock } from './articles.mock'
import { INVALID_REQUEST_RESULT } from '../constants/constants'
import type { ListIdParamType } from '../types'

export const getArticleContent = async (id: string) => {
	const articles = await getArticlesListMock()

	return id === 'all'
		? articles
		: articles.filter((article) =>
				article.tags.includes(id as Exclude<ListIdParamType, 'all'>)
			)
}

export const getArticlePaginatedContent = async (
	id: string,
	pageSize: number,
	nextPage = 1
) => {
	const articles = await getArticlesListMock()

	const selectedCategoryArticles =
		id === 'all'
			? articles
			: articles.filter((article) =>
					article.tags.includes(id as Exclude<ListIdParamType, 'all'>)
				)

	if (!Number.isInteger(pageSize) || pageSize <= 0) return INVALID_REQUEST_RESULT

	const maxPage = !selectedCategoryArticles.length
		? 1
		: Math.ceil(selectedCategoryArticles.length / pageSize)

	const isInvalidRequest =
		nextPage > maxPage || nextPage < 0 || !Number.isInteger(nextPage)

	if (isInvalidRequest) {
		return INVALID_REQUEST_RESULT
	}

	const calculatedNextPage = (nextPage || 1) - 1

	const currentStart = calculatedNextPage * pageSize

	const currentContent = selectedCategoryArticles.slice(
		currentStart,
		currentStart + pageSize
	)

	const returnValue = {
		items: currentContent,
		pagination: {
			maxPage,
			pageSize,
			currentPage: calculatedNextPage + 1
		}
	}

	return returnValue
}

export const getArticlesLayoutContent = async () => {
	const result = await getArticlesLayoutContentMock()

	return result
}
