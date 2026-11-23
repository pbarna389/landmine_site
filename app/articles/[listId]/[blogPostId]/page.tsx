import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Copyright, CreationDetails } from './components'
import { RecursiveContent } from '@/components'

import { getBlockPostContent } from './server'

import PICTURE_01 from './assets/blogheader.jpg'

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
			<div className="relative w-full min-h-0 h-[65dvh] overflow-hidden">
				<Image src={PICTURE_01.src} alt="blogpost fejléc" fill />
			</div>
			<article className="flex flex-col min-h-0 gap-5 p-7.5 overflow-y-auto">
				<CreationDetails date={blogPostData.date} />
				<Copyright />
				<RecursiveContent data={blogPostData.content.content} level={0} />
			</article>
		</>
	)
}
