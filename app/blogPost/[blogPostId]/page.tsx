export default async function BlogPostIdPage({
	params
}: {
	params: Promise<{ blogPostId: string }>
}) {
	const { blogPostId } = await params

	return (
		<section>
			<h2 className="text-xl">BlogPost id: {blogPostId}</h2>
		</section>
	)
}
