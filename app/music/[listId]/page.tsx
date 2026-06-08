import { notFound } from 'next/navigation'

import { AlbumDetails } from './components'

import { MUSIC_CATEGORY_CONTENT } from '../constants/constants'

export default async function MusicListPage({
	params
}: {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const selectedList = MUSIC_CATEGORY_CONTENT.subPages.find((list) => list.id === listId)

	if (!selectedList) {
		notFound()
	}

	return (
		<div className="text-2xl text-white flex flex-col gap-5">
			{selectedList.content.map((album) => (
				<AlbumDetails key={album.id} album={album} />
			))}
		</div>
	)
}
