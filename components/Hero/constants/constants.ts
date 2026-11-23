import type { ArrayElementType } from '@/types'

import Image1 from '../Assets/mm01.webp'
import Image2 from '../Assets/mm02.webp'
import Image3 from '../Assets/mm03.webp'

export const HERO_DATA = [
	{
		id: 1,
		img: Image1,
		mainText: ['Gyakorlat-központú', 'gitárórák'],
		subText: [
			'• A sikerélményért és a zenélés öröméért',
			'• Jó hangulatú órák, klassz dalok, sok gitározás'
		],
		links: [
			{
				id: 'hero-scene-1-button-1',
				text: 'jelentkezés',
				href: '#message'
			},
			{
				id: 'hero-scene-1-button-2',
				text: 'gitáros videók',
				href: '/videos/vlog'
			}
		]
	},
	{
		id: 2,
		img: Image2,
		mainText: ['Rugalmas, alakítható', 'tanmenet'],
		subText: [
			'• Közérthetően, lényegretörően, türelmesen',
			'• Személyre szabott tanulás, igazodva az igényekhez'
		],
		links: [
			{
				id: 'hero-scene-2-button-1',
				text: 'jelentkezés',
				href: '#message'
			},
			{
				id: 'hero-scene-2-button-2',
				text: 'havi 1 szóló játék',
				href: '/videos/solo-game'
			}
		]
	},
	{
		id: 3,
		img: Image3,
		mainText: ['Értékes, színvonalas', 'hobbi'],
		subText: [
			'• Teljesen kezdőknek és haladóknak is',
			'• Tanulás akusztikus és elektromos gitáron egyaránt'
		],
		links: [
			{
				id: 'hero-scene-3-button-1',
				text: 'jelentkezés',
				href: '#message'
			},
			{
				id: 'hero-scene-3-button-2',
				text: 'gitáros okosságok',
				href: '/videos'
			}
		]
	}
]

export type HERO_DATA_TYPE = ArrayElementType<typeof HERO_DATA>
export type HERO_LINKS = HERO_DATA_TYPE['links']
