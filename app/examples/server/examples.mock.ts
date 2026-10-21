import { mockResponse } from '@/utils'

import { EXAMPLES_CONTENT, EXAMPLES_MAIN_CONTENT } from '../constants/constants'

export const getExamplesMainContentMock = async () => {
	const result = mockResponse(EXAMPLES_MAIN_CONTENT)

	return result
}

export const getExamplesContentMock = async () => {
	const result = mockResponse(EXAMPLES_CONTENT)

	return result
}
