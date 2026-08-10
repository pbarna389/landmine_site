'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NAV_ELEMENTS } from '../../constants'

type DesktopLinkProps = {
	link: (typeof NAV_ELEMENTS)[0]
}

export const DesktopLink = ({ link }: DesktopLinkProps) => {
	const pathname = usePathname()

	const isCurrentActive = pathname.length && pathname.includes(link.href)

	return (
		<Link
			href={link.href}
			className={`relative font-montserrat uppercase text-[16.4px] font-bold tracking-[2px] h-full text-base transition-all duration-300 cursor-pointer hover:text-hover active:text-hover after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-right after:h-0.5 after:bottom-0 after:left-0 after:transition-transform after:bg-hover hover:after:w-full hover:after:scale-x-100 hover:after:origin-left active:after:scale-x-100 active:after:w-full active:after:origin-left ${isCurrentActive ? 'scale-105 text-hover after:scale-x-100' : ''}`}
			key={`nav-${link.text}`}
		>
			{link.text}
		</Link>
	)
}
