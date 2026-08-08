import { getAboutMock } from './about.mock'

export const getAboutContent = async () => {
	const result = await getAboutMock()

	const {
		profileContent: { textContent, profileInfo }
	} = result

	return { textContent, profileInfo }
}
