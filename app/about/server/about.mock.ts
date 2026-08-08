import { mockResponse } from '@/utils'

import { PROFILE_CONTENT } from '../constants/constants'

export const getAboutMock = async () => {
	return mockResponse(PROFILE_CONTENT)
}
