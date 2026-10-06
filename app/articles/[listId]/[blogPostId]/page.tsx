import { Suspense } from 'react'

export default async function ArticleBlogPostPage({
	params
}: {
	params: Promise<{ blogPostId: string; listId: string }>
}) {
	const { listId, blogPostId } = await params

	return (
		<Suspense>
			<p>listId: {listId}</p>
			<p>blogPostId: {blogPostId}</p>
		</Suspense>
	)
}
