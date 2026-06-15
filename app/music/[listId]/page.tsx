import { notFound } from 'next/navigation'

import { AlbumDetails } from './components'

import { MUSIC_CATEGORY_CONTENT } from '../constants/constants'

export default async function MusicListPage({
	params
}: {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const selectedList = MUSIC_CATEGORY_CONTENT.subPages.find(
		(list) => list.id.toString() === listId
	)

	if (!selectedList) {
		notFound()
	}

	const listContent = selectedList.content.sort(
		(current, next) =>
			Number(next.id.split('-').at(-1)) - Number(current.id.split('-').at(-1))
	)

	return (
		<div className="text-2xl text-white flex flex-col sm:w-[70vw] md:w-[50vw] lg:max-w-[43vw]">
			{listContent.map((album, idx) => (
				<AlbumDetails key={album.id} album={album} idx={idx} />
			))}
		</div>
	)
}
