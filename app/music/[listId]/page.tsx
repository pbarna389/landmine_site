import { notFound } from 'next/navigation'

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
}
