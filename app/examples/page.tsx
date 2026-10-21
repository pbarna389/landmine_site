import { notFound, redirect } from 'next/navigation'

import { getExampleMainFallback } from './server/examples.service'

export default async function ExamplePage() {
	const { categoryId, lessonId } = await getExampleMainFallback()

	if (!categoryId || !lessonId) {
		notFound()
	}

	redirect(`/examples/${categoryId}/${lessonId}`)
}
