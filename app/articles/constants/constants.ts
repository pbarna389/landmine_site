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
