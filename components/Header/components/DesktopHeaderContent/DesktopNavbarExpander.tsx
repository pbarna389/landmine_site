'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useSubNavbarHandlersContext, useSubNavbarState } from './context'
import { Icons } from '@/components'

import { DesktopRecursiveContent } from './DesktopRecursiveContent'
import type { NavItem } from '../../constants/constants'

type DesktopNavbarExpanderProps = {
	link: NavItem
}

// TODO: finish the recursive wrapper design
// TODO: HANDLE THE KEYBOARD USAGE

export const DesktopNavbarExpander = ({ link }: DesktopNavbarExpanderProps) => {
	const pathname = usePathname()

	const { handlePointerEnter, handleOutsideClick } = useSubNavbarHandlersContext()
	const { state } = useSubNavbarState()

	const isCurrentActive = pathname === link.href || pathname.startsWith(`${link.href}`)

	const thisRouteCurrentlySelected = state.selectedRoute?.[0].routeName === link.text

	return (
		<>
			<Link
				href={link.href}
				onPointerEnter={() => handlePointerEnter(link.text, 0, 0, link.href)}
				onFocus={() => handlePointerEnter(link.text, 0, 0, link.href)}
				onClick={handleOutsideClick}
				className={`relative z-3 font-montserrat uppercase border-none hover:bg-transparent flex items-center justify-center gap-0.5 p- text-[16.4px] font-bold tracking-[2px] h-full text-base transition-all duration-300 cursor-pointer hover:text-hover focus:text-hover after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-right after:h-0.5 after:bottom-0 after:left-0 after:transition-transform after:bg-hover hover:after:w-full hover:after:scale-x-100 hover:after:origin-left active:after:scale-x-100 active:after:w-full active:after:origin-left  ${thisRouteCurrentlySelected ? 'text-red-500 hover:text-red-700 focus:text-red-700 after:bg-red-700' : ''} ${isCurrentActive ? 'scale-105 text-hover after:scale-x-100' : ''}`}
				key={`navbar-desktop-link-${link.text}`}
			>
				{link.text}
				<Icons iconVars={'chevronDown'} />
			</Link>
			{state.isOpen && thisRouteCurrentlySelected && (
				<>
					<div className="bg-black/50 absolute z-2 top-[3.22rem] left-0 w-full flex flex-col p-2 gap-5 items-center justify-center text-white before:absolute before:w-screen before:-top-4 before:h-5 before:left-0 ">
						<DesktopRecursiveContent recursionLayer={1} subChild={link.content} />
					</div>
				</>
			)}
		</>
	)
}
