'use client'

import { DesktopLink } from './DesktopLink'
import { DesktopNavbarExpander } from './DesktopNavbarExpander'
import { NAV_ELEMENTS } from '../../constants'
import { useSubNavbarRef } from '../../context'

export const DesktopNavbarContent = () => {
	const { ref } = useSubNavbarRef()

	return (
		<div ref={ref} className="flex gap-5.25 items-center justify-center text-black">
			{NAV_ELEMENTS.map((link) =>
				!link.content ? (
					<DesktopLink key={`navbar-desktop-link-${link.text}`} link={link} />
				) : (
					<DesktopNavbarExpander
						key={`navbar-desktop-expander-button-${link.text}`}
						link={link}
					/>
				)
			)}
		</div>
	)
}
