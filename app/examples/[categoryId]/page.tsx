import { notFound, redirect } from 'next/navigation'

import type { ExampleKeys } from '../constants/constants'
import { getExampleCategoryFallback } from '../server/examples.service'

type ExampleCategoryPageProps = {
	params: Promise<{ categoryId: ExampleKeys }>
}

export default async function ExamplesCategoryPage({ params }: ExampleCategoryPageProps) {
	const { categoryId } = await params

	const data = await getExampleCategoryFallback(categoryId)

	if (!data || data.content.length === 0) {
		notFound()
	}

	{
		redirect(`/examples/${categoryId}/${data.content[0].id}`)
	}
}
