import { NAV_ICONS_BASE } from '@/constants/constants'
import type { LinkWithIconsType } from '@/types'

export const NAV_ELEMENTS = [
	{ text: 'főoldal', href: '/' },
	{ text: 'adatlap', href: '/adatlap' },
	{
		text: 'gitároktatás',
		href: './gitaroktatas'
	},
	{ text: 'videók', href: '/' },
	{ text: 'zenék', href: '/' },
	{ text: 'cikkek', href: '/' }
]

export const NAV_ICONS_MOBILE: LinkWithIconsType = [
	...NAV_ICONS_BASE.reverse(),
	{
		site: 'message',
		href:
			'mailto:info@landmine-gitaroktatas.hu?subject=Gitároktatás -jelentkezés, érdeklődés'
	},
	{
		site: 'telephone',
		href: 'tel:06307207878'
	}
]
