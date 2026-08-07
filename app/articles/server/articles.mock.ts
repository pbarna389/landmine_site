import { mockResponse } from '@/utils'

import { ARTICLE_LIST_CONTENT } from '../[listId]/constants/constants'
import { ARTICLE_MAIN_CONTENT } from '../constants/constants'

export const getArticlesListMock = async () => {
	return mockResponse(ARTICLE_LIST_CONTENT)
}

export const getArticlesLayoutContentMock = async () => {
	return mockResponse(ARTICLE_MAIN_CONTENT)
}
