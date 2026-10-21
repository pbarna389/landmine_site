import { cache } from 'react'

import { mockResponse } from '@/utils'

import { EXAMPLES_CONTENT, EXAMPLES_MAIN_CONTENT } from '../constants/constants'

export const getExamplesMainContentMock = cache(async () => {
	const result = mockResponse(EXAMPLES_MAIN_CONTENT, 2500)

	return result
})

export const getExamplesContentMock = cache(async () => {
	const result = mockResponse(EXAMPLES_CONTENT, 2000)

	return result
})
