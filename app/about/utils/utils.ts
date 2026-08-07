import { mockResponse } from '@/utils'

import { PROFILE_CONTENT } from '../constants/constants'

export const getProfileContent = async () => {
	const response = await mockResponse(PROFILE_CONTENT)

	const {
		profileContent: { textContent, profileInfo }
	} = response

	return {
		textContent,
		profileInfo
	}
}
