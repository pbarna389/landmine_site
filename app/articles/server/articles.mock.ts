import { mockResponse } from '@/utils'

import { ARTICLE_LIST_CONTENT } from '../[listId]/constants/constants'

export const getArticlesMock = async () => {
	return mockResponse(ARTICLE_LIST_CONTENT)
}
