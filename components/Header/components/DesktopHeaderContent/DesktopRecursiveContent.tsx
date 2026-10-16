'use client'

import type { NavItem } from '../../constants/constants'

type DesktopRecursiveContentProps = {
	recursionLayer: number
	subChild: NavItem | NavItem[] | undefined
}

const selectedChild = 0

export const DesktopRecursiveContent = ({
	subChild,
	recursionLayer
}: DesktopRecursiveContentProps) => {
	if (!subChild) return null

	if (!Array.isArray(subChild)) {
		return (
			<>
				<div className="non-array-subchild flex gap-2 flex-col">
					<span>{subChild.text}</span>
				</div>

				{subChild.content && (
					<DesktopRecursiveContent
						recursionLayer={recursionLayer + 1}
						subChild={subChild.content}
					/>
				)}
			</>
		)
	}

	return (
		<>
			<div className="array subchild with elements flex gap-2">
				{subChild.map((child) => {
					return (
						<div
							className="subchild element"
							key={`navbar-recursive-array-child-${child.text}`}
						>
							<span>{child.text}</span>
						</div>
					)
				})}
			</div>
			{subChild[selectedChild].content && (
				<DesktopRecursiveContent
					recursionLayer={recursionLayer + 1}
					subChild={subChild[selectedChild].content}
				/>
			)}
		</>
	)
}
