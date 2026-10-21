import Image from 'next/image'
import { notFound } from 'next/navigation'

import { StarRating } from './components'

import { EXAMPLES_CONTENT } from '../../constants/constants'

type ExamplesLessonPage = {
	params: Promise<{ categoryId: string; lessonId: string }>
}

export default async function ExamplesLessonPage({ params }: ExamplesLessonPage) {
	const { categoryId, lessonId } = await params

	const content = EXAMPLES_CONTENT

	const selectedContent = content[categoryId].content.find(
		(lesson) => lesson.id === Number(lessonId)
	)

	if (!selectedContent) {
		notFound()
	}

	return (
		<div className="w-full flex flex-col items-center gap-2.5 sm:min-w-45 sm:max-w-150 h-fit">
			<div className="relative w-full min-h-50">
				<Image
					src={selectedContent?.content.img.src}
					alt={selectedContent.content.name}

					fill
				/>
			</div>
			<div className="flex w-full"></div>
			<StarRating rating={selectedContent.content.difficulty} id={selectedContent.id} />
			<p className="p-5 pt-0 text-center sm:text-start">{selectedContent.content.text}</p>
		</div>
	)
}
