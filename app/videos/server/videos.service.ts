import { getVideosAdvertMock, getVideosContentMock } from './videos.mock'

export const getVideosContent = async () => {
	const result = getVideosContentMock()

	return result
}

export const getVideoAdvert = async () => {
	const result = getVideosAdvertMock()

	return result
}
