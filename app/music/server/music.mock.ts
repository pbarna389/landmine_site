import { mockResponse } from '@/utils'

import { MUSIC_CATEGORY_CONTENT, SUBPAGE_INFO } from '../constants/constants'

export const getMusicContentMock = async () => {
	const data = {
		musicData: {
			title: MUSIC_CATEGORY_CONTENT.title,
			textContent: MUSIC_CATEGORY_CONTENT.textContent
		},
		subpageData: [...SUBPAGE_INFO]
	}

	return mockResponse(data)
}

export const getMusicListContentMock = async () => {
	const data = MUSIC_CATEGORY_CONTENT.subPages

	return mockResponse(data)
}
