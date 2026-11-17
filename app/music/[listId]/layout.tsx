import { notFound } from 'next/navigation'

import { AlbumInfiniteWrapper } from './components'

import { getMusicPaginatedContent } from '../server'

export default async function MusicListLayout({
	children,
	params
}: React.PropsWithChildren & {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const selectedList = await getMusicPaginatedContent(listId, 3, 1)

	if (!selectedList.pagination) {
		notFound()
	}

	return (
		<section
			id="music"
			className="text-2xl scroll-mt-15 text-white flex flex-col sm:w-[70vw] md:w-[50vw] lg:max-w-[43vw]"
		>
			<AlbumInfiniteWrapper
				items={selectedList.items}
				pagination={selectedList.pagination}
			/>
			{children}
		</section>
	)
}
