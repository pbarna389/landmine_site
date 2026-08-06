import { ARTICLE_LIST_CONTENT } from '../constants/constants'

export const MimicResponse = async <T>(data: T, timeoutTime = 800): Promise<T> => {
	return new Promise<T>((resolve) => {
		setTimeout(() => {
			resolve(data)
		}, timeoutTime)
	})
}

export const getArticleContent = async () => {
	return MimicResponse(ARTICLE_LIST_CONTENT)
}
