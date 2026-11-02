'use client'

import { MobileLink } from './MobileLink'
import { MobileLinkExpander } from './MobileLinkExpander'
import { NAV_ELEMENTS } from '../../constants'
import { useSubNavbarHandlers } from '../../context'

export const MobileRoutes = () => {
	const { handleOutsideClick } = useSubNavbarHandlers()

	return NAV_ELEMENTS.map((link) =>
		!link.content ? (
			<li
				className="w-full flex bg-header-mobile-bg border border-header-mobile-border"
				key={`mobile-navbar-link-${link.text}`}
			>
				<MobileLink link={link} callback={handleOutsideClick} />
			</li>
		) : (
			<MobileLinkExpander
				key={`mobile-navbar-link-${link.text}`}
				link={link}
				handleClick={handleOutsideClick}
			/>
		)
	)
}
