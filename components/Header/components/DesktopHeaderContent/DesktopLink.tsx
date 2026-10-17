'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useSubNavbarHandlersContext } from './context'
import { Icons } from '@/components'

import type { NavItem } from '../../constants/constants'

type DesktopLinkProps = {
	link: NavItem
	showIcon?: boolean
}

export const DesktopLink = ({ link, showIcon = false }: DesktopLinkProps) => {
	const pathname = usePathname()
	const { handleOutsideClick } = useSubNavbarHandlersContext()

	const isCurrentActive = pathname === link.href || pathname.startsWith(`${link.href}`)

	return (
		<Link
			onClick={handleOutsideClick}
			href={link.href}
			className={`relative z-3 font-montserrat uppercase flex items-center justify-center gap-0.5 text-[16.4px] font-bold tracking-[2px] h-full text-base transition-all duration-300 cursor-pointer hover:text-hover active:text-hover after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-right after:h-0.5 after:bottom-0 after:left-0 after:transition-transform after:bg-hover hover:after:w-full hover:after:scale-x-100 hover:after:origin-left active:after:scale-x-100 active:after:w-full active:after:origin-left ${isCurrentActive ? 'scale-105 text-hover after:scale-x-100' : ''}`}
		>
			{link.text}
			{!!showIcon && <Icons iconVars={'chevronDown'} />}
		</Link>
	)
}
