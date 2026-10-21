import { notFound } from 'next/navigation'

import type { PropsWithChildren } from 'react'

import { CategorySummary } from './components'
import { SubcategorySelector } from './components/SubcategorySelector'

import type { ExampleKeys } from '../constants/constants'
import { getExampleCategoryFallback } from '../server/examples.service'

type ExampleCategoryLayoutProps = {
	params: Promise<{ categoryId: ExampleKeys }>
}

export default async function ExampleCategoryLayout({
	children,
	params
}: PropsWithChildren & ExampleCategoryLayoutProps) {
	const { categoryId } = await params

	const data = await getExampleCategoryFallback(categoryId)

	if (!data.content.length) {
		notFound()
	}

	return (
		<section className="flex flex-col items-center justify-center p-10 pl-5 pr-5 gap-5 bg-zinc-50 font-sans text-black w-full">
			<CategorySummary headerText={data.name} selectedDataText={data.text} />
			<div className="flex flex-col items-center w-full justify-center space-y-2.5 sm:w-auto rounded-md overflow-hidden">
				<SubcategorySelector categoryId={categoryId} content={data.content} />
				{children}
			</div>
		</section>
	)
}
