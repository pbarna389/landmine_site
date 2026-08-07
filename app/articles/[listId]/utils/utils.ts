import { mockResponse } from '@/utils'

import { ARTICLE_LIST_CONTENT } from '../constants/constants'
import type { ListIdParamType } from '../types'

export const getArticleContent = async (id: ListIdParamType) => {
	const response = await mockResponse(ARTICLE_LIST_CONTENT)

	const result =
		id === 'all' ? response : response.filter((article) => article.tags.includes(id))

	return result
}
