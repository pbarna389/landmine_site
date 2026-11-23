import { notFound } from 'next/navigation'

import { Copyright, CreationDetails, ModalHeader } from './components'
import { RecursiveContent } from '@/components'

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
			<ModalHeader title={blogPostData.title} text={blogPostData.text} />
			<article className="flex flex-col min-h-0 gap-5 p-7.5 overflow-y-auto">
				<CreationDetails date={blogPostData.date} />
				<Copyright />
				<RecursiveContent data={blogPostData.content.content} level={0} />
			</article>
		</>
	)
}
