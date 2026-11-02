'use client'

import { MobileLink } from './MobileLink'
import { MobileLinkExpander } from './MobileLinkExpander'
import { NAV_ELEMENTS } from '../../constants'
import type { NavItem } from '../../constants/constants'
import { useSubNavbarHandlers, useSubNavbarState } from '../../context'

type MobileRoutesProps = {
	content?: NavItem[]
	recursionLayer?: number
}

export const MobileRoutes = ({ content, recursionLayer }: MobileRoutesProps) => {
	const { handleOutsideClick } = useSubNavbarHandlers()
	const { state } = useSubNavbarState()

	const routes = content ? content : NAV_ELEMENTS

	if (state.selectedRoute && recursionLayer) {
		const parent = state.selectedRoute[recursionLayer - 1]

		return routes.map((link, idx) => {
			const newHref = `${parent.routeHref}${link.href}`

			const updatedLink = { ...link, href: newHref }

			if (!link.content) {
				return (
					<li
						className="basic route link w-full flex bg-header-mobile-bg border border-header-mobile-border"
						key={`mobile-navbar-link-${link.text}`}
					>
						<MobileLink link={updatedLink} callback={handleOutsideClick} />
					</li>
				)
			}
			return (
				<MobileLinkExpander
					key={`mobile-navbar-link-${link.text}`}
					idx={idx}
					link={link}
					recursionLayer={recursionLayer}
				/>
			)
		})
	}

	return routes.map((link, idx) =>
		!link.content ? (
			<li
				className="basic route link w-full flex bg-header-mobile-bg border border-header-mobile-border"
				key={`mobile-navbar-link-${link.text}`}
			>
				<MobileLink link={link} callback={handleOutsideClick} />
			</li>
		) : (
			<MobileLinkExpander
				key={`mobile-navbar-link-${link.text}`}
				idx={idx}
				link={link}
				recursionLayer={recursionLayer}
			/>
		)
	)
}
