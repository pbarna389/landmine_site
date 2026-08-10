import type { ArticleCardType } from '../../types'
import Picture05 from '../assets/alice3.jpg'
import Picture03 from '../assets/fejes.jpg'
import Picture04 from '../assets/fules.jpg'
import Picture02 from '../assets/gyakterv.jpg'
import Picture01 from '../assets/improgyak.jpg'
import Picture06 from '../assets/onism1.jpg'

export const SKELETON_CLASSES = {
	parentSkeleton:
		'grid gap-5 w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
	childrenSkeleton:
		'gap-2.5 max-w-full w-full h-65 lg:h-80 rounded-xl border border-black p-0 pt-0 pr-0 pl-0 pb-0 overflow-hidden group sm:min-w-1/4 lg:w-full lg:min-h-full bg-black/50 animate-skeletonAnim'
}

export const ARTICLE_LIST_CONTENT: ArticleCardType[] = [
	{
		id: 1,
		title: 'improvizációs lehetőségek',
		date: '2020-09-20',
		tags: ['theory'],
		img: Picture01,
		text:
			'Összegezzük az akkord-skála kapcsolatokat, nézünk hangnemváltásokat, akkordszólókat, improvizációs struktúrákat, tippeket...'
	},
	{
		id: 2,
		title: 'gyakorlási terv',
		date: '2025-09-15',
		img: Picture02,
		tags: ['advices'],
		text:
			'Egy jó gyakorlási terv nagy segítség lehet: fenntartja a folyamatos fejlődést és lendületet, biztosítja, hogy ne maradjanak el bizonyos területek.\nMinta-tervek a cikkben,\nráadás videóval...'
	},
	{
		id: 3,
		title: 'zenék leszedése hallásból',
		date: '2025-01-29',
		img: Picture03,
		tags: ['advices', 'facts'],
		text:
			'Néhány hasznos és gyakorlati tipp dallamok, szólók, akkordmenetek és riffek lefüleléséhez - amely a hallásfejlesztés egyik fontos és ajánlott eleme. \n Cikk videókkal..'
	},
	{
		id: 4,
		title: 'szóló-leszedés',
		date: '2026-04-06',
		img: Picture04,
		tags: ['advices', 'facts'],
		text:
			'A lehető legjobb hallásfejlesztő gyakorlat - ami nem csak a témák tanulásában hasznos, hanem sokféle zenei készségeket is fejleszt.\n Hasznos tippek a cikkben \n ráadás videóval...'
	},
	{
		id: 5,
		title: 'the devil put dinosaurs here - ajánló',
		date: '2018-04-03',
		img: Picture05,
		tags: ['music'],
		text:
			'A seattle-i grunge/hard rock zenekar második fejezetéből... Progresszív témák, gazdag hagzásvilág, sajátos hangulatok - néhány benyomás a fent említett lemezről.'
	},
	{
		id: 6,
		title: 'zene és önismeret',
		date: '2017-11-13',
		img: Picture06,
		tags: ['philosophy'],
		text:
			'Hogyan segíthet a zenélés az önismeretben? Miért olyan hatásos eszköz a művészet? Ebben a vázlatos írásban szó esik egy olyan útról, ami önmagunk mélyebb rétegei felé hatol...'
	}
]
