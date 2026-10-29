import { cache } from 'react'

import {
	getVideosAdvertMock,
	getVideosCategoryMock,
	getVideosContentMock
} from './videos.mock'

export const getVideosContent = async () => {
	const result = getVideosContentMock()

	return result
}

export const getVideoAdvert = async () => {
	const result = getVideosAdvertMock()

	return result
}

export const getVideoCategoryContent = cache(async (id: string) => {
	const data = await getVideosCategoryMock()

	const result = data[id]

	return result
})
