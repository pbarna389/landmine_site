export default async function ArticlesCategoryPage({
	params
}: {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	return (
		<section className="border border-black w-full h-full text-center">
			<h1 className="capitalize">{listId}</h1>
		</section>
	)
}
