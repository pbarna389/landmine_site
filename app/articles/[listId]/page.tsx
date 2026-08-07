import { ArticleCard } from './components'
import { getArticleContent } from './utils'
import type { ListIdParamType } from './types'

export default async function ArticlesCategoryPage({
	params
}: {
	params: Promise<{ listId: ListIdParamType }>
}) {
	const { listId } = await params

	const selectedArticle = await getArticleContent(listId)

	return (
		<section className="grid gap-5 w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{selectedArticle.map((article, idx) => (
				<ArticleCard key={`article-card-${article.id}`} {...article} idx={idx} />
			))}
		</section>
	)
}
