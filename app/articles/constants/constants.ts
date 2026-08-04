const ARTICLE_FILTER_CATEGORIES = [
	{
		id: 'art-filter-theory',
		text: 'zeneelmélet'
	},
	{
		id: 'art-filter-advices',
		text: 'tippek'
	},
	{
		id: 'art-filter-int-facts',
		text: 'érdekességek'
	},
	{
		id: 'art-filter-music',
		text: 'zenékről'
	},
	{
		id: 'art-filter-philosophy',
		text: 'filozófia'
	},
	{
		id: 'art-filter-all',
		text: 'összes cikk'
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
