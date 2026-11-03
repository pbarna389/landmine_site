import Link from 'next/link'

import { IconContext } from 'react-icons'

import { Icons } from '@/components/Icons'

import { NAV_ICONS_MOBILE } from '../../constants'

export const MobileIcons = () => {
	return (
		<IconContext value={{ size: '28' }}>
			{NAV_ICONS_MOBILE.map((link) => (
				<Link
					href={link.href}
					target="_blank"
					className="top-0 font-raleway p-1 pl-1.5 pr-0 bg-header-mobile-bg text-black capitalize border border-header-mobile-border w-full cursor-pointer *:transition-all *:duration-50 *:active:scale-110 *:active:brightness-125"
					key={`nav-mobile-community-links-${link.site}`}
				>
					<span className="flex w-full justify-center gap-1.5 items-center ">
						<Icons iconVars={link.site} />
						{link.site}
					</span>
				</Link>
			))}
		</IconContext>
	)
}
