import { NAV_ICONS_BASE } from '@/constants/constants'
import type { LinkWithIconsType } from '@/types'

export type NavItem = {
	href: string
	text: string
	content?: NavItem[]
}

export const NAV_ELEMENTS: NavItem[] = [
	{ text: 'főoldal', href: '/home' },
	{ text: 'adatlap', href: '/about' },
	{
		text: 'gitároktatás',
		href: '/classes',
		content: [
			{
				href: '/#intro',
				text: 'Bemutatkozás'
			},
			{
				href: '/#premise',
				text: 'Amire számíthatsz'
			},
			{
				href: '/#possibilities',
				text: 'Irányok és lehetőségek'
			},
			{
				href: '/#prices',
				text: 'Helyszín és árak'
			}
		]
	},
	{
		text: 'videók',
		href: '/videos',
		content: [
			{
				href: '/vlog',
				text: 'Gitáros csemegék',
				content: [
					{
						text: 'Zenei csemegék',
						href: '/PLn5cNXlh5JYNmWSHVLMsA6F_3wNRhaofk'
					},
					{
						text: 'Technikák',
						href: '/PLn5cNXlh5JYNJwmXN08v2fKEoC7dwTKWv'
					},
					{
						text: 'Gitáros egypercesek',
						href: '/PLn5cNXlh5JYPHRBJL_zEBp0TZ7bktfo6Y'
					},
					{
						text: 'Riffek és akkordmenetek',
						href: '/PLn5cNXlh5JYOkBpxQwINbPpTYBdFwn_xD'
					},
					{
						text: 'Lickek hazai gitárosoktól',
						href: '/PLn5cNXlh5JYP7tqC2WmM6yB86XyK1Crwb'
					},
					{
						text: 'Saját lickek',
						href: '/PLn5cNXlh5JYMDfijriMMmsFTR2MQPFTp0'
					}
				]
			},
			{
				href: '/theory',
				text: 'Zeneelmélet',
				content: [
					{
						text: 'Zeneelméleti videók',
						href: '/PLn5cNXlh5JYOK0qIXqaZz0LsQ0zHpK30U'
					},
					{
						text: 'Improvizálás',
						href: '/PLn5cNXlh5JYP_qrnVQGcRtylKSUVF5AOU'
					},
					{
						text: 'Zeneírás',
						href: '/PLn5cNXlh5JYMEgspuw_Ns5tqzHOF0zCro'
					}
				]
			},
			{
				text: 'Havi egy szóló',
				href: '/solo-game'
			}
		]
	},
	{
		text: 'zenék',
		href: '/music',
		content: [
			{
				text: 'The New Era',
				href: '/3'
			},
			{
				text: 'Middle Ages',
				href: '/2'
			},
			{
				text: 'Early Years',
				href: '/1'
			}
		]
	},
	{
		text: 'cikkek',
		href: '/articles',
		content: [
			{
				text: 'Összes cikk',
				href: '/all',
				content: [
					{
						text: 'Improvizációs lehetőségek',
						href: '/1'
					},
					{
						text: 'Gyakorlási terv',
						href: '/2'
					},
					{
						text: 'Zenék leszedése hallásból',
						href: '/3'
					},
					{
						text: 'Szóló-leszedés',
						href: '/4'
					},
					{
						text: 'The Devil Put Dinosaurs here - Ajánló',
						href: '/5'
					},
					{
						text: 'Zene és önismeret',
						href: '/6'
					}
				]
			},
			{
				text: 'Zeneelmélet',
				href: '/theory',
				content: [
					{
						text: 'Improvizációs lehetőségek',
						href: '/1'
					}
				]
			},
			{
				text: 'Tippek',
				href: '/advices',
				content: [
					{
						text: 'Gyakorlási terv',
						href: '/2'
					},
					{
						text: 'Zenék leszedése hallásból',
						href: '/3'
					},
					{
						text: 'Szóló-leszedés',
						href: '/4'
					}
				]
			},
			{
				text: 'Érdekességek',
				href: '/facts',
				content: [
					{
						text: 'Zenék leszedése hallásból',
						href: '/3'
					},
					{
						text: 'Szóló-leszedés',
						href: '/4'
					}
				]
			},
			{
				text: 'Zenékről',
				href: '/music',
				content: [
					{
						text: 'The Devil Put Dinosaurs here - Ajánló',
						href: '/5'
					}
				]
			},
			{
				text: 'Filozófia',
				href: '/philosophy',
				content: [
					{
						text: 'Zene és önismeret',
						href: '/6'
					}
				]
			}
		]
	}
]

export const NAV_ICONS_MOBILE: LinkWithIconsType = [...NAV_ICONS_BASE]
