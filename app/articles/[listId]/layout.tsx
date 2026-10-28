import { ArticleCard } from './components'

import { getArticleContent } from '../server'
import type { ListIdParamType } from '../types'

export default async function ArticlesCategoryLayout({
	children,
	params
}: React.PropsWithChildren & {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const selectedArticle = await getArticleContent(listId as ListIdParamType)

	return (
		<>
			<section className="grid gap-5 w-full h-full items-stretch grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
				{selectedArticle.map((article, idx) => (
					<ArticleCard
						key={`article-card-${article.id}`}
						{...article}
						idx={idx}
						listId={listId}
					/>
				))}
			</section>
			{children}
		</>
	)
}
