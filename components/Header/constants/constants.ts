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
				text: 'gitároktatás sub-page 1',
				href: '/subpage1',
				content: [
					{
						text: 'gitároktatás subpage 1: sub-sub-page 1',
						href: '/subsubpage1',
						content: [
							{
								text: 'gitároktatás subpage1: sub-sub-sub-page1',
								href: '/subsubsubpage1'
							}
						]
					},
					{
						text: 'gitároktatás subpage1: sub-sub-Page 2',
						href: '/subsubpage2'
					}
				]
			},
			{
				text: 'gitároktatás sub-page 2',
				href: '/subpage2'
			}
		]
	},
	{
		text: 'videók',
		href: '/videos'
	},
	{
		text: 'zenék',
		href: '/music'
	},
	{ text: 'cikkek', href: '/articles' }
]

export const NAV_ICONS_MOBILE: LinkWithIconsType = [...NAV_ICONS_BASE]
