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

	return routes.map((link, idx) => {
		if (!link.content) {
			const parent =
				state.selectedRoute && recursionLayer
					? state.selectedRoute[recursionLayer - 1]
					: { routeHref: '' }
			const newHref = `${parent.routeHref}${link.href}`

			const updatedLink = { ...link, href: newHref }

			return (
				<li
					className="basic route link w-full flex bg-header-mobile-bg border border-header-mobile-border"
					key={`mobile-navbar-link-${updatedLink.text}`}
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
