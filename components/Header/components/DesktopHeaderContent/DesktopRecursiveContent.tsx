'use client'

import Link from 'next/link'

import { useSubNavbarHandlersContext, useSubNavbarState } from './context'

import type { NavItem } from '../../constants/constants'

type DesktopRecursiveContentProps = {
	recursionLayer: number
	subChild: NavItem | NavItem[] | undefined
}

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
			<div
				onPointerEnter={() => handlePointerEnter(subChild.text, recursionLayer, 0)}
				onClick={handleOutsideClick}
			>
				<Link href={subChild.href} className="non-array-subchild flex gap-2 flex-col">
					<span>{subChild.text}</span>
				</Link>

				{subChild.content && (
					<DesktopRecursiveContent
						recursionLayer={recursionLayer + 1}
						subChild={subChild.content}
					/>
				)}
			</div>
		)
	}

	const selectedElement = parent.selectedChild ? parent.selectedChild : 0

	return (
		<>
			<div className="array subchild with elements flex gap-2">
				{subChild.map((child, idx) => {
					return (
						<div
							key={`navbar-recursive-array-child-${child.text}`}
							onPointerEnter={() => handlePointerEnter(child.text, recursionLayer, idx)}
							onClick={handleOutsideClick}
						>
							<Link href={child.href} className="subchild element">
								<span>{child.text}</span>
							</Link>
						</div>
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
