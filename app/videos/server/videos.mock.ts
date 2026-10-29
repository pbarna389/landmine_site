import { mockResponse } from '@/utils'

import { VIDEO_CATEGORY_CONTENT } from '../[videoCategory]/constants/constants'
import { VIDEOS_CONTENT } from '../constants/constants'
import { VIDEO_ADVERT_CONTENT } from '../sections/VideoAdvertSection/constants/constants'

export const getVideosContentMock = async () => {
	return mockResponse(VIDEOS_CONTENT)
}

export const getVideosAdvertMock = async () => {
	return mockResponse(VIDEO_ADVERT_CONTENT)
}

export const getVideosCategoryMock = async () => {
	return mockResponse(VIDEO_CATEGORY_CONTENT)
}
