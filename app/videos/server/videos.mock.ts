import { mockResponse } from '@/utils'

import { VIDEOS_CONTENT } from '../constants/constants'

export const getVideosContentMock = async () => {
	return mockResponse(VIDEOS_CONTENT)
}
