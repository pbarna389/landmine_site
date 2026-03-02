import type { IconNames } from '@/types'

export const NAV_ELEMENTS = [
	{ text: 'főoldal', href: '' },
	{ text: 'adatlap', href: '' },
	{ text: 'gitároktatás', href: '' },
	{ text: 'videók', href: '' },
	{ text: 'zenék', href: '' },
	{ text: 'cikkek', href: '' }
]

export const NAV_ICONS_DESKTOP: { href: string; site: IconNames }[] = [
	{
		site: 'tiktok',
		href: 'https://www.tiktok.com/@landminegitar'
	},
	{
		site: 'facebook',
		href: 'https://www.facebook.com/landminegitar/'
	},
	{
		site: 'youtube',
		href: 'https://www.youtube.com/c/landmine-gitaroktatas/featured'
	}
]

export const NAV_ICONS_MOBILE: { href: string; site: IconNames }[] = [
	...NAV_ICONS_DESKTOP.reverse(),
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
