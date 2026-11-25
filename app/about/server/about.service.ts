import { cache } from 'react'

import { getAboutMock } from './about.mock'

export const getAboutContent = cache(async () => {
	const result = await getAboutMock()

	const {
		profileContent: { textContent, profileInfo },
		enabled
	} = result

	return { enabled, textContent, profileInfo }
})
