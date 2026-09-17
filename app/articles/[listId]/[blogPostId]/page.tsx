export default async function ArticleBlogPost({
	params
}: {
	params: Promise<{ blogPostId: string; listId: string }>
}) {
	const { listId, blogPostId } = await params

	return (
		<div>
			<p>listId: {listId}</p>
			<p>blogPostId: {blogPostId}</p>
		</div>
	)
}
