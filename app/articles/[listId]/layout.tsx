import { notFound } from 'next/navigation'

import { ArticleInfiniteWrapper } from './components'

import { getArticlePaginatedContent } from '../server'

export default async function ArticlesCategoryLayout({
	children,
	params
}: React.PropsWithChildren & {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const selectedArticle = await getArticlePaginatedContent(listId, 3, 1)

	if (!selectedArticle.items.length) {
		notFound()
	}

	return (
		<>
			<section className="grid gap-5 w-full h-full items-stretch grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				<ArticleInfiniteWrapper {...selectedArticle} />
			</section>
			{children}
		</>
	)
}
