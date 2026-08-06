import { mimicResponse } from '@/utils'

import { ARTICLE_LIST_CONTENT } from '../constants/constants'

export const getArticleContent = async () => {
	return mimicResponse(ARTICLE_LIST_CONTENT)
}
