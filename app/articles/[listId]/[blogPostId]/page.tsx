import { notFound } from 'next/navigation'

import { Copyright, CreationDetails, RecursiveContent } from './components'

import { getBlockPostContent } from './server'

export default async function ArticleBlogPostPage({
	params
}: {
	params: Promise<{ blogPostId: string; listId: string }>
}) {
	const { listId, blogPostId } = await params

	const blogPostData = await getBlockPostContent(listId, Number(blogPostId))

	if (!blogPostData) {
		notFound()
	}

	return (
		<>
			<CreationDetails date={blogPostData.date} />
			<Copyright />
			<RecursiveContent data={blogPostData.content.content} level={0} />
		</>
	)
}
