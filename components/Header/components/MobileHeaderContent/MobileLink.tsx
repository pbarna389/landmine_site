'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import type { NavItem } from '../../constants/constants'

type MobileLinkProps = {
	callback: () => void
	link: NavItem
	passDownHash?: string | null
}

export const MobileLink = ({ link, callback, passDownHash }: MobileLinkProps) => {
	const pathname = usePathname()

	const isCurrentActive = pathname === link.href || pathname.startsWith(`${link.href}`)

	return (
		<Link
			href={`${link.href}${passDownHash ? `#${passDownHash}` : ''}`}
			className={`top-0 font-raleway p-1 pl-0 pr-0  text-black capitalize  w-full cursor-pointer text-center transition-all duration-50 active:scale-105 ${isCurrentActive ? 'scale-115 brightness-115' : ''}`}
			onClick={callback}
		>
			{link.text}
		</Link>
	)
}
