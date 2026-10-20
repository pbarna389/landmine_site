import Image from 'next/image'
import { notFound } from 'next/navigation'

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
		<div className="min-w-55 max-w-134.75 h-fit">
			<div className="relative w-full h-50">
				<Image
					src={selectedContent?.content.img.src}
					alt={selectedContent.content.name}

					fill
				/>
			</div>
			<p className="p-5">{selectedContent.content.text}</p>
		</div>
	)
}
