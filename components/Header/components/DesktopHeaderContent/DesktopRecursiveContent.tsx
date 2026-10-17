'use client'

import Link from 'next/link'

import { useSubNavbarHandlersContext, useSubNavbarState } from './context'

import type { NavItem } from '../../constants/constants'

type DesktopRecursiveContentProps = {
	recursionLayer: number
	subChild: NavItem | NavItem[] | undefined
}

// TODO: Finish the design of the blocks

export const DesktopRecursiveContent = ({
	subChild,
	recursionLayer
}: DesktopRecursiveContentProps) => {
	const {
		state: { selectedRoute }
	} = useSubNavbarState()

	const parent = selectedRoute?.[recursionLayer - 1]

	const { handlePointerEnter, handleOutsideClick } = useSubNavbarHandlersContext()

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
					onPointerEnter={() =>
						handlePointerEnter(subChild.text, recursionLayer, 0, subChild.href)
					}
					onFocus={() => handlePointerEnter(subChild.text, recursionLayer, 0, subChild.href)}
					onClick={handleOutsideClick}
				>
					<span>{subChild.text}</span>
				</Link>

				{subChild.content && (
					<DesktopRecursiveContent
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
			<div className="flex gap-2">
				{subChild.map((child, idx) => {
					return (
						<Link
							href={`${parent.routeHref}${child.href}`}
							aria-label={`navigációs al-link, szint: ${recursionLayer}, cél: ${child.text}`}
							key={`navbar-recursive-array-child-${child.text}`}
							onPointerEnter={() =>
								handlePointerEnter(child.text, recursionLayer, idx, child.href)
							}
							onFocus={() => handlePointerEnter(child.text, recursionLayer, idx, child.href)}
							onClick={handleOutsideClick}
						>
							<span>{child.text}</span>
						</Link>
					)
				})}
			</div>
			{subChild[selectedElement].content && (
				<DesktopRecursiveContent
					recursionLayer={recursionLayer + 1}
					subChild={subChild[selectedElement].content}
				/>
			)}
		</>
	)
}
