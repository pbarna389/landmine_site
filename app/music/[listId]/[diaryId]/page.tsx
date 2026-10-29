export default async function MusicDiaryPage({
	params
}: {
	params: Promise<{ diaryId: string; listId: string }>
}) {
	const { listId, diaryId } = await params

	return (
		<div className="diary-list-page">
			list: {listId}, diary: {diaryId}
		</div>
	)
}
