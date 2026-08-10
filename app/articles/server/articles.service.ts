import { getArticlesLayoutContentMock, getArticlesListMock } from './articles.mock'
import type { ListIdParamType } from '../types'

export const getArticleContent = async (id: ListIdParamType) => {
	const articles = await getArticlesListMock()

	return id === 'all' ? articles : articles.filter((article) => article.tags.includes(id))
}

export const getArticlesLayoutContent = async () => {
	const result = await getArticlesLayoutContentMock()

	return result
}
