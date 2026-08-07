import { getArticlesMock } from './articles.mock'
import type { ListIdParamType } from '../types'

export const getArticleContent = async (id: ListIdParamType) => {
	const articles = await getArticlesMock()

	return id === 'all' ? articles : articles.filter((article) => article.tags.includes(id))
}
