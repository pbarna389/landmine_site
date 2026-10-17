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
				href: '/classes/#intro',
				text: 'Bemutatkozás'
			},
			{
				href: '/classes/#premise',
				text: 'Amire számíthatsz'
			},
			{
				href: '/classes/#possibilities',
				text: 'Irányok és lehetőségek'
			},
			{
				href: '/classes/#prices',
				text: 'Helyszín és árak'
			}
		]
	},
	{
		text: 'videók',
		href: '/videos',
		content: [
			{
				href: '/videos/vlog',
				text: 'Gitáros csemegék',
				content: [
					{
						text: 'Zenei csemegék',
						href: '/videos/vlog/PLn5cNXlh5JYNmWSHVLMsA6F_3wNRhaofk'
					},
					{
						text: 'Technikák',
						href: '/videos/vlog/PLn5cNXlh5JYNJwmXN08v2fKEoC7dwTKWv'
					},
					{
						text: 'Gitáros egypercesek',
						href: '/videos/vlog/PLn5cNXlh5JYPHRBJL_zEBp0TZ7bktfo6Y'
					},
					{
						text: 'Riffek és akkordmenetek',
						href: '/videos/vlog/PLn5cNXlh5JYOkBpxQwINbPpTYBdFwn_xD'
					},
					{
						text: 'Lickek hazai gitárosoktól',
						href: '/videos/vlog/PLn5cNXlh5JYP7tqC2WmM6yB86XyK1Crwb'
					},
					{
						text: 'Saját lickek',
						href: '/videos/vlog/PLn5cNXlh5JYMDfijriMMmsFTR2MQPFTp0'
					}
				]
			},
			{
				href: '/videos/theory',
				text: 'Zeneelmélet',
				content: [
					{
						text: 'Zeneelméleti videók',
						href: '/videos/theory/PLn5cNXlh5JYOK0qIXqaZz0LsQ0zHpK30U'
					},
					{
						text: 'Improvizálás',
						href: '/videos/theory/PLn5cNXlh5JYP_qrnVQGcRtylKSUVF5AOU'
					},
					{
						text: 'Zeneírás',
						href: '/videos/theory/PLn5cNXlh5JYMEgspuw_Ns5tqzHOF0zCro'
					}
				]
			},
			{
				href: '/videos/solo-game',
				text: 'Havi egy szóló'
			}
		]
	},
	{
		text: 'zenék',
		href: '/music',
		content: [
			{
				text: 'The New Era',
				href: '/music/3'
			},
			{
				text: 'Middle Ages',
				href: '/music/2'
			},
			{
				text: 'Early Years',
				href: '/music/1'
			}
		]
	},
	{
		text: 'cikkek',
		href: '/articles',
		content: [
			{
				text: 'Összes cikk',
				href: '/articles/all'
			},
			{
				text: 'Zeneelmélet',
				href: '/articles/theory'
			},
			{
				text: 'Tippek',
				href: '/articles/advices'
			},
			{
				text: 'Érdekességek',
				href: '/articles/facts'
			},
			{
				text: 'Zenékről',
				href: '/articles/music'
			},
			{
				text: 'Filozófia',
				href: '/articles/philosophy'
			}
		]
	}
]

export const NAV_ICONS_MOBILE: LinkWithIconsType = [...NAV_ICONS_BASE]
