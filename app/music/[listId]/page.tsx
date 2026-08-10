import { notFound } from 'next/navigation'

import { AlbumDetails } from './components'

import { getMusicListContent } from '../server'

export default async function MusicListPage({
	params
}: {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const selectedList = await getMusicListContent(listId)

	if (!selectedList) {
		notFound()
	}

	return (
		<section className="text-2xl text-white flex flex-col sm:w-[70vw] md:w-[50vw] lg:max-w-[43vw]">
			{selectedList.map((album, idx) => (
				<AlbumDetails key={album.id} album={album} idx={idx} />
			))}
		</section>
	)
}
