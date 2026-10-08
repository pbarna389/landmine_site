import { mockResponse } from '@/utils'

import { BLOGPOST_MODAL_CONTENT } from '../constants/constants'

export const BLOGPOST_MOCK = async () => {
	const result = await mockResponse(BLOGPOST_MODAL_CONTENT)

	return result
}
