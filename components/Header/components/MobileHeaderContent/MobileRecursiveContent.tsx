'use client'

import Link from 'next/link'

import { MobileNavbarContent } from './MobileNavbarContent'
import type { NavItem } from '../../constants/constants'
import { useSubNavbarHandlers, useSubNavbarState } from '../../context'

type MobileRecursiveContentProps = {
	recursionLayer: number
	subChild: NavItem | NavItem[] | undefined
}

export const MobileRecursiveContent = ({
	subChild,
	recursionLayer
}: MobileRecursiveContentProps) => {
	const {
		state: { selectedRoute }
	} = useSubNavbarState()

	const parent = selectedRoute?.[recursionLayer]

	const { handleOutsideClick } = useSubNavbarHandlers()

	if (!subChild || !parent) {
		return null
	}

	if (!Array.isArray(subChild)) {
		return (
			<>
				<Link
					href={`${parent.routeHref}${subChild.href}`}
					className="flex gap-2 flex-col"
					aria-label={`navigációs al-link, szint: ${recursionLayer}, cél: ${subChild.text}`}
					onClick={handleOutsideClick}
				>
					<span>{parent.routeName}</span>
				</Link>

				{subChild.content && (
					<MobileRecursiveContent
						recursionLayer={recursionLayer + 1}
						subChild={subChild.content}
					/>
				)}
			</>
		)
	}

	const selectedElement = parent.selectedChild ? parent.selectedChild : 0

	return (
		<>
			<MobileNavbarContent recursionLayer={recursionLayer + 1} content={subChild} />

			{subChild[selectedElement]?.content && (
				<MobileRecursiveContent
					recursionLayer={recursionLayer + 1}
					subChild={subChild[selectedElement].content}
				/>
			)}
		</>
	)
}
