import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { StarRating } from './components'

import type { ExampleKeys } from '../../constants/constants'
import { getExampleLesson } from '../../server/examples.service'

type ExamplesLessonPage = {
	params: Promise<{ categoryId: ExampleKeys; lessonId: string }>
}

export default async function ExamplesLessonPage({ params }: ExamplesLessonPage) {
	const { categoryId, lessonId } = await params

	const selectedLesson = await getExampleLesson(categoryId, lessonId)

	if (!selectedLesson) {
		notFound()
	}

	return (
		<div className="w-full flex flex-col items-center gap-2.5 sm:min-w-45 border border-black rounded-b-md sm:max-w-150 h-fit">
			<Link
				className="relative w-full min-h-50"
				href={selectedLesson.content.link}
				aria-label={`Link a lecke videójáhozÉ ${selectedLesson.content.name}`}
			>
				<Image
					src={selectedLesson?.content.img.src}
					alt={selectedLesson.content.name}
					blurDataURL={selectedLesson?.content.img.blurDataURL}
					sizes="(max-width: 800px) 100vw, 750px"
					fill
				/>
			</Link>
			<div className="flex w-full"></div>
			<StarRating rating={selectedLesson.content.difficulty} id={selectedLesson.id} />
			<p className="p-5 pt-0 text-center sm:text-start">{selectedLesson.content.text}</p>
		</div>
	)
}
