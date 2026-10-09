import { BLOGPOST_MOCK } from './blogPost.mock'

export const getBlockPostContent = async (listId: string, postId: number) => {
	const data = await BLOGPOST_MOCK()

	const result = data.find(
		(post) => post.id === postId && (listId === 'all' || post.tags.includes(listId))
	)

	return result
}
