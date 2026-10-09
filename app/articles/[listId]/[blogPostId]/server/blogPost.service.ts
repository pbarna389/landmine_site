import { BLOGPOST_MOCK } from './blogPost.mock'

export const getBlockPostContent = async (id: number) => {
	const data = await BLOGPOST_MOCK()

	const result = data.find((post) => post.id === id)

	return result
}
