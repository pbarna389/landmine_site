'use client'

import { usePathname } from 'next/navigation'

import { useSubNavbarHandlersContext, useSubNavbarState } from './context'
import { Icons } from '@/components'

import { DesktopRecursiveContent } from './DesktopRecursiveContent'
import type { NavItem } from '../../constants/constants'

type DesktopNavbarExpanderProps = {
	link: NavItem
}

export const DesktopNavbarExpander = ({ link }: DesktopNavbarExpanderProps) => {
	const pathname = usePathname()

	const { handleClick } = useSubNavbarHandlersContext()
	const { state } = useSubNavbarState()

	const isCurrentActive = pathname === link.href || pathname.startsWith(`${link.href}`)

	const thisRouteCurrentlySelected = state.selectedRoute?.[0] === link.href

	return (
		<>
			<button
				onClick={() => handleClick(link.href)}
				className={`relative font-montserrat uppercase border-none hover:bg-transparent flex items-center justify-center gap-0.5 p- text-[16.4px] font-bold tracking-[2px] h-full text-base transition-all duration-300 cursor-pointer hover:text-hover focus:text-hover after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-right after:h-0.5 after:bottom-0 after:left-0 after:transition-transform after:bg-hover hover:after:w-full hover:after:scale-x-100 hover:after:origin-left active:after:scale-x-100 active:after:w-full active:after:origin-left ${isCurrentActive ? 'text-hover after:text-2xl' : ''} ${thisRouteCurrentlySelected ? 'text-red-500 hover:text-red-700 focus:text-red-700' : ''} `}
				key={`navbar-desktop-link-${link.text}`}
			>
				{link.text}
				<Icons iconVars={'chevronDown'} />
			</button>
			{state.isOpen && thisRouteCurrentlySelected && (
				<div className="bg-black/50 absolute top-[3.22rem] left-0 w-full flex flex-col p-2 gap-5 items-center justify-center text-white">
					<DesktopRecursiveContent recursionLayer={0} subChild={link.content} />
				</div>
			)}
		</>
	)
}
