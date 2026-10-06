import { BLOGPOST_MOCK } from './blogPost.mock'

export const getBlockPostContent = async () => {
	const result = await BLOGPOST_MOCK()

	return result
}
