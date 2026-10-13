'use client'

import { usePathname } from 'next/navigation'

import { useSubNavbarHandlersContext } from './context'
import { Icons } from '@/components'

import type { NAV_ELEMENTS } from '../../constants'

type DesktopNavbarExpanderProps = {
	link: (typeof NAV_ELEMENTS)[0]
}

export const DesktopNavbarExpander = ({ link }: DesktopNavbarExpanderProps) => {
	const pathname = usePathname()

	const { handleClick } = useSubNavbarHandlersContext()

	const isCurrentActive = pathname === link.href || pathname.startsWith(`${link.href}`)

	return (
		<button
			onClick={() => handleClick(link.text)}
			className={`relative font-montserrat uppercase border-none hover:bg-transparent flex items-center justify-center gap-0.5 p- text-[16.4px] font-bold tracking-[2px] h-full text-base transition-all duration-300 cursor-pointer hover:text-hover active:text-hover focus:text-hover after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-right after:h-0.5 after:bottom-0 after:left-0 after:transition-transform after:bg-hover hover:after:w-full hover:after:scale-x-100 hover:after:origin-left active:after:scale-x-100 active:after:w-full active:after:origin-left ${isCurrentActive ? 'text-hover after:scale-x-100' : ''}`}
			key={`navbar-desktop-link-${link.text}`}
		>
			{link.text}
			<Icons iconVars={'chevronDown'} />
		</button>
	)
}
