import { Copyright, CreationDetails, RecursiveContent } from './components'

import { getBlockPostContent } from './server'

export default async function ArticleBlogPostPage({
	params
}: {
	params: Promise<{ blogPostId: string; listId: string }>
}) {
	const { blogPostId } = await params

	const blogPostData = await getBlockPostContent(Number(blogPostId))

	return (
		<>
			<CreationDetails date={blogPostData?.date} />
			<Copyright />
			<RecursiveContent data={blogPostData?.content.content} level={0} />
		</>
	)
}
