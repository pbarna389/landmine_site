export default async function VideoCategoriesPage({
	params
}: {
	params: Promise<{ videoCategory: string }>
}) {
	const { videoCategory } = await params

	return <div className="w-full text-center p-5 bg-green-500/75">{videoCategory}</div>
}
