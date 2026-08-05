export default async function ArticlesCategoryPage({
	params
}: {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	return <h1 className="capitalize">{listId}</h1>
}
