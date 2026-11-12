export const SKELETON_CLASSES = {
	parentSkeleton:
		'grid gap-5 w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
	childrenSkeleton:
		'gap-2.5 max-w-full w-full h-65 lg:h-80 rounded-xl border border-black p-0 pt-0 pr-0 pl-0 pb-0 overflow-hidden group sm:min-w-1/4 lg:w-full lg:min-h-full bg-black/50 animate-skeletonAnim'
}

const ARTICLE_FILTER_CATEGORIES = [
	{
		id: 'art-filter-all',
		text: 'összes cikk',
		linkName: 'all'
	},
	{
		id: 'art-filter-theory',
		text: 'zeneelmélet',
		linkName: 'theory'
	},
	{
		id: 'art-filter-advices',
		text: 'tippek',
		linkName: 'advices'
	},
	{
		id: 'art-filter-int-facts',
		text: 'érdekességek',
		linkName: 'facts'
	},
	{
		id: 'art-filter-music',
		text: 'zenékről',
		linkName: 'music'
	},
	{
		id: 'art-filter-philosophy',
		text: 'filozófia',
		linkName: 'philosophy'
	}
]

export const ARTICLE_MAIN_CONTENT = {
	title: 'cikkek / zeneblog',
	textContent: {
		text:
			"Folyamatosan bővülő zenei cikkek, gyakorlási tippek, érdekességek, zeneajánlók - témakörökre bontva. Ugyanitt elérhetők az 'Zeneelméleti jajdejók' írásos verziói is.\n",
		subText:
			'(A cikkek tartalmának, anyagainak más helyeken való megjelenítéséhez engedélykérés szükséges!)'
	},
	filters: ARTICLE_FILTER_CATEGORIES
}
