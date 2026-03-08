import { NAV_ICONS_BASE } from '@/constants/constants'
import type { IconNames, LinkWithIconsType } from '@/types'

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

const desktopIcons: IconNames[] = ['youtube', 'facebook', 'tiktok']

export const NAV_ICONS_DESKTOP: LinkWithIconsType = NAV_ICONS_BASE.filter((icon) =>
	desktopIcons.includes(icon.site)
)

export const NAV_ICONS_MOBILE: LinkWithIconsType = [...NAV_ICONS_BASE]
