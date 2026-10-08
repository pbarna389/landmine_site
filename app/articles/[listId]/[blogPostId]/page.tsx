import { RecursiveContent } from './components'

import { getBlockPostContent } from './server'

export default async function ArticleBlogPostPage({
	params
}: {
	params: Promise<{ blogPostId: string; listId: string }>
}) {
	const { listId, blogPostId } = await params

	const blogPostData = await getBlockPostContent(Number(blogPostId))

	return (
		<>
			<RecursiveContent data={blogPostData?.content} />
			<p>listId: {listId}</p>
			<p>blogPostId: {blogPostId}</p>
		</>
	)
}
