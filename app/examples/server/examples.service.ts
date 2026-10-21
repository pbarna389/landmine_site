import { cache } from 'react'

import { getExamplesContentMock, getExamplesMainContentMock } from './examples.mock'
import type { ExampleKeys } from '../constants/constants'

export const getExamplesMainContent = async () => {
	const data = await getExamplesMainContentMock()

	return data
}

export const getExampleMainFallback = async () => {
	const data = await getExamplesContentMock()

	const selectedData = data.metal
	const selectedId = selectedData.content[0].id

	return {
		categoryId: selectedData.id,
		lessonId: selectedId
	}
}

export const getExampleCategoryFallback = cache(async (categoryId: string) => {
	const data = await getExamplesContentMock()

	const selectedCategoryData = data[categoryId as ExampleKeys]

	if (!selectedCategoryData) {
		return
	}

	const selectedData = {
		...selectedCategoryData,
		content: selectedCategoryData.content.map((cat) => ({ id: cat.id, text: cat.name }))
	}

	return selectedData
})

export const getExampleLesson = async (categoryId: ExampleKeys, lessonId: string) => {
	const data = await getExamplesContentMock()

	const selectedCategoryData = data[categoryId]

	if (!selectedCategoryData) {
		return
	}

	const convertLessonId = Number(lessonId)

	const selectedLesson = data[categoryId].content.find(
		(lesson) => lesson.id === convertLessonId
	)

	return selectedLesson
}
