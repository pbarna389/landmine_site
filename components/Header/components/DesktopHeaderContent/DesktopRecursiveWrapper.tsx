'use client'

import { useState } from 'react'

import { DesktopLink } from './DesktopLink'
import { NAV_ELEMENTS } from '../../constants'

export const DesktopRecursiveWrapper = () => {
	const [isOpen, setIsOpen] = useState(false)

	const mainElements = NAV_ELEMENTS.map((element) => ({
		text: element.text,
		href: element.href,
		shouldBeExpandable: element?.content
	}))

	return (
		<div className="flex gap-5.25 text-black">
			{mainElements.map((link) =>
				!link.shouldBeExpandable ? (
					<DesktopLink key={`navbar-desktop-link-${link.text}`} link={link} />
				) : (
					<span
						className="flex justify-center items-center"
						key={`navbar-desktop-link-${link.text}`}
					>
						<DesktopLink link={link} showIcon={true} />
					</span>
				)
			)}
		</div>
	)
}
