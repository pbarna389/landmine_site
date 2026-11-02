'use client'

import { MobileLink } from './MobileLink'
import { MobileLinkExpander } from './MobileLinkExpander'
import { NAV_ELEMENTS } from '../../constants'

type MobileRoutesProps = {
	handleClick: () => void
}

export const MobileRoutes = ({ handleClick }: MobileRoutesProps) => {
	return NAV_ELEMENTS.map((link) =>
		!link.content ? (
			<li
				className="w-full flex bg-header-mobile-bg border border-header-mobile-border"
				key={`mobile-navbar-link-${link.text}`}
			>
				<MobileLink link={link} callback={handleClick} />
			</li>
		) : (
			<MobileLinkExpander
				key={`mobile-navbar-link-${link.text}`}
				link={link}
				handleClick={handleClick}
			/>
		)
	)
}
