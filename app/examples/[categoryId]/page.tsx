import { notFound, redirect } from 'next/navigation'

import { EXAMPLES_CONTENT } from '../constants/constants'

type ExampleCategoryPageProps = {
	params: Promise<{ categoryId: string }>
}

export default async function ExamplesCategoryPage({ params }: ExampleCategoryPageProps) {
	const { categoryId } = await params

	const selectedData = EXAMPLES_CONTENT[categoryId]

	const newData = {
		...selectedData,
		content: selectedData.content.map((cat) => ({ id: cat.id, text: cat.name }))
	}

	if (!newData.content.length) {
		notFound()
	}

	if (newData.content.length !== 0) {
		redirect(`/examples/${categoryId}/${newData.content[0].id}`)
	}
}
