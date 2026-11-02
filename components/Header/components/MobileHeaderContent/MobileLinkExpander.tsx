'use client'

import { Icons } from '@/components/Icons'

import { MobileLink } from './MobileLink'
import { MobileRecursiveContent } from './MobileRecursiveContent'
import type { NavItem } from '../../constants/constants'
import { useSubNavbarHandlers, useSubNavbarState } from '../../context'

type MobileLinkExpanderProps = {
	idx: number
	link: NavItem
	recursionLayer?: number
}

export const MobileLinkExpander = ({
	link,
	idx,
	recursionLayer = 0
}: MobileLinkExpanderProps) => {
	const { handlePointerEnter, handleOutsideClick } = useSubNavbarHandlers()
	const { state } = useSubNavbarState()

	const thisRouteCurrentlySelected = state.selectedRoute?.[0].routeName === link.text

	const parent = state.selectedRoute?.[recursionLayer - 1]

	const linkHref = parent ? `${parent.routeHref}${link.href}` : link.href

	const updatedContent = { ...link, href: linkHref }

	return (
		<li className="relative bg-header-mobile-bg border border-header-mobile-border w-full flex item-center justify-center">
			<MobileLink link={updatedContent} callback={handleOutsideClick} />
			<button
				type="button"
				className="absolute flex items-center justify-center -translate-y-1/2 top-1/2 right-0 w-7.5 border-2 border-black h-full"
				onClick={() => handlePointerEnter(link.text, recursionLayer, idx, link.href)}
			>
				<Icons iconVars={'chevronRight'} />
			</button>
			{state.isOpen && thisRouteCurrentlySelected && (
				<>
					<div className="bg-black/50 absolute z-2 top-0 left-0 w-full flex flex-col p-2 gap-5 items-center justify-center text-white before:absolute before:w-screen before:-top-4 before:h-5 before:left-0 ">
						<MobileRecursiveContent recursionLayer={recursionLayer} subChild={link.content} />
					</div>
				</>
			)}
		</li>
	)
}
