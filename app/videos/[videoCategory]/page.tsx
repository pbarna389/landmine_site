import { notFound, redirect } from 'next/navigation'

import { getVideoCategoryContent } from '../server'

//TODO: Add the related loading state

export default async function VideoCategoriesPage({
	params
}: {
	params: Promise<{ videoCategory: string }>
}) {
	const { videoCategory } = await params

	const data = await getVideoCategoryContent(videoCategory)

	if (!data) {
		notFound()
	}

	const firstElement = data.content[0]

	if (firstElement) {
		redirect(`/videos/${videoCategory}/${firstElement.id}`)
	}
}
