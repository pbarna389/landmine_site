import { ArticleCard } from './components'
import { ARTICLE_LIST_CONTENT } from './constants/constants'

export default async function ArticlesCategoryPage({
	params
}: {
	params: Promise<{ listId: string }>
}) {
	const { listId } = await params

	const selectedArticle =
		listId === 'all'
			? ARTICLE_LIST_CONTENT
			: ARTICLE_LIST_CONTENT.filter((article) => article.tags.includes(listId))

	return (
		<section className="grid gap-5 w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
			{selectedArticle.map((article, idx) => (
				<ArticleCard key={`article-card-${article.id}`} {...article} idx={idx} />
			))}
		</section>
	)
}
