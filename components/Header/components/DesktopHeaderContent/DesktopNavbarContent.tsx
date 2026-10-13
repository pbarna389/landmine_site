'use client'

import { useSubNavbarRef } from './context'

import { DesktopLink } from './DesktopLink'
import { DesktopNavbarExpander } from './DesktopNavbarExpander'
import { NAV_ELEMENTS } from '../../constants'

export const DesktopNavbarContent = () => {
	const { ref } = useSubNavbarRef()

	const mainElements = NAV_ELEMENTS.map((element) => ({
		text: element.text,
		href: element.href,
		shouldBeExpandable: element?.content
	}))

	return (
		<div ref={ref} className="flex gap-5.25 items-center justify-center text-black">
			{mainElements.map((link) =>
				!link.shouldBeExpandable ? (
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
