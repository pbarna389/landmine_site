import { notFound } from 'next/navigation'

import type { PropsWithChildren } from 'react'

import { CategorySummary } from './components'
import { SubcategorySelector } from './components/SubcategorySelector'

import { EXAMPLES_CONTENT } from '../constants/constants'

type ExampleCategoryLayoutProps = {
	params: Promise<{ categoryId: string }>
}

export default async function ExampleCategoryLayout({
	children,
	params
}: PropsWithChildren & ExampleCategoryLayoutProps) {
	const { categoryId } = await params

	const selectedData = EXAMPLES_CONTENT[categoryId]

	if (!selectedData) {
		notFound()
	}

	const newData = {
		...selectedData,
		content: selectedData.content.map((cat) => ({ id: cat.id, text: cat.name }))
	}

	return (
		<section className="flex flex-col items-center justify-center p-10 pl-5 pr-5 gap-5 bg-zinc-50 font-sans text-black w-full">
			<CategorySummary headerText={newData.name} selectedDataText={newData.text} />
			<div className="flex flex-col items-center justify-center space-y-2.5 border-black/40 border-2">
				<SubcategorySelector categoryId={categoryId} content={newData.content} />
				{children}
			</div>
		</section>
	)
}
