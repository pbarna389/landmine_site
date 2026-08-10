'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NAV_ELEMENTS } from '../../constants'

type MobileLinkProps = {
	callback: () => void
	link: (typeof NAV_ELEMENTS)[0]
}

export const MobileLink = ({ link, callback }: MobileLinkProps) => {
	const pathname = usePathname()

	const isCurrentActive = pathname.length && pathname.includes(link.href)

	return (
		<Link
			href={link.href}
			className={`top-0 font-raleway p-1 pl-0 pr-0 bg-header-mobile-bg text-black capitalize border border-header-mobile-border w-full cursor-pointer text-center transition-all duration-50 active:scale-105 ${isCurrentActive ? 'scale-115 brightness-115' : ''}`}
			key={`nav-mobile-main-links-${link.text}`}
			onClick={callback}
		>
			{link.text}
		</Link>
	)
}
