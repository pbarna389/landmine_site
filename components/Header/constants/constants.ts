import { NAV_ICONS_BASE } from '@/constants/constants'
import type { LinkWithIconsType } from '@/types'

export const NAV_ELEMENTS = [
	{ text: 'főoldal', href: '/' },
	{ text: 'adatlap', href: '/about' },
	{
		text: 'gitároktatás',
		href: '/classes'
	},
	{ text: 'videók', href: '/videos' },
	{ text: 'zenék', href: '/music' },
	{ text: 'cikkek', href: '/articles' }
]

export const NAV_ICONS_MOBILE: LinkWithIconsType = [...NAV_ICONS_BASE]
