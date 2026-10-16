'use client'

import type { NavItem } from '../../constants/constants'

type DesktopRecursiveContentProps = {
	subChild: NavItem | NavItem[] | undefined
	maxRecursionLayer?: number
}

const selectedChild = 0

export const DesktopRecursiveContent = ({ subChild }: DesktopRecursiveContentProps) => {
	if (!subChild) return null

	if (!Array.isArray(subChild)) {
		return (
			<>
				<div className="flex gap-2 flex-col">
					<span>{subChild.text}</span>
				</div>

				{subChild.content && <DesktopRecursiveContent subChild={subChild.content} />}
			</>
		)
	}

	return (
		<>
			<div className="flex gap-2">
				{subChild.map((child) => {
					return (
						<div key={`navbar-recursive-array-child-${child.text}`}>
							<span>{child.text}</span>
						</div>
					)
				})}
			</div>
			{subChild[selectedChild].content && (
				<DesktopRecursiveContent subChild={subChild[selectedChild].content} />
			)}
		</>
	)
}
