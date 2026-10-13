import { NAV_ICONS_BASE } from '@/constants/constants'
import type { LinkWithIconsType } from '@/types'

export const NAV_ELEMENTS = [
	{ text: 'főoldal', href: '/home' },
	{ text: 'adatlap', href: '/about' },
	{
		text: 'gitároktatás',
		href: '/classes',
		content: []
	},
	{
		text: 'videók',
		href: '/videos',
		content: []
	},
	{
		text: 'zenék',
		href: '/music',
		content: []
	},
	{ text: 'cikkek', href: '/articles', content: [] }
]

export const NAV_ICONS_MOBILE: LinkWithIconsType = [...NAV_ICONS_BASE]
