import type { IconNames, LinkWithIconsType } from '@/types'

export const BASE_TIMEOUT = 7500
export const BASE_BASE_ANIM_TIMEOUT = 750

export const SOCIAL_COLLECTION: IconNames[] = ['youtube', 'facebook', 'tiktok']

export const NAV_ICONS_BASE: LinkWithIconsType = [
	{
		site: 'youtube',
		text: 'feliratkozom youtube-on!',
		href: 'https://www.youtube.com/c/landmine-gitaroktatas/featured'
	},
	{
		site: 'facebook',
		text: 'követem facebook-on!',
		href: 'https://www.facebook.com/landminegitar/'
	},
	{
		site: 'tiktok',
		text: 'meglesem tiktok-on!',
		href: 'https://www.tiktok.com/@landminegitar'
	},
	{
		site: 'message',
		text: 'mail-t írok!',
		href:
			'mailto:info@landmine-gitaroktatas.hu?subject=Gitároktatás -jelentkezés, érdeklődés'
	},
	{
		site: 'telephone',
		text: 'telefonálok!',
		href: 'tel:06307207878'
	}
]

export const NAV_SOCIALS_DESKTOP: LinkWithIconsType = NAV_ICONS_BASE.filter((icon) =>
	SOCIAL_COLLECTION.includes(icon.site)
)
