import { ArticleCard } from './components'
import { getArticleContent } from './utils'

export default async function ArticlesCategoryPage({
	params
}: {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const testAsyncArticle = await getArticleContent()

	const selectedArticle =
		listId === 'all'
			? testAsyncArticle
			: testAsyncArticle.filter((article) => article.tags.includes(listId))

	return (
		<section className="grid gap-5 w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{selectedArticle.map((article, idx) => (
				<ArticleCard key={`article-card-${article.id}`} {...article} idx={idx} />
			))}
		</section>
	)
}
