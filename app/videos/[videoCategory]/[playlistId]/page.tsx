export default async function VideoCategoriesPage({
	params
}: {
	params: Promise<{ playlistId: string }>
}) {
	const { playlistId } = await params

	return (
		<div className="w-full text-center p-5 space-y-10 ">
			<h1>{playlistId}</h1>
		</div>
	)
}
