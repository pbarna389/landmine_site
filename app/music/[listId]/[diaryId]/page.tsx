import { notFound } from 'next/navigation'

import { getAlbumDiary } from '../../server'

export default async function MusicDiaryPage({
	params
}: {
	params: Promise<{ diaryId: string; listId: string }>
}) {
	const { listId, diaryId } = await params

	const details = await getAlbumDiary(listId, diaryId)

	if (!details) {
		notFound()
	}

	return (
		<article
			className={`grid place-items-center cursor-default normal-case z-2 -left-px p-15 sm:p-5 w-full h-full border-2 border-gray-400 rounded-md text-white text-[16px] sm:text-xl text-center overflow-y-scroll overscroll-none scrollbar-thin scrollbar-gutter-both scrollbar-track-transparent scrollbar-thumb-gray-400`}
		>
			{details}
		</article>
	)
}
