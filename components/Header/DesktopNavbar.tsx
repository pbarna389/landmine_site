'use client'

import Image from 'next/image'

import Logo1 from '@/public/logo2.png'

import { DesktopLink } from './components'
import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'
import { NAV_ELEMENTS } from './constants'
import { NAV_SOCIALS_DESKTOP } from '@/constants/constants'

import { LinksWithIconsWrapper } from '../LinksWithIconsWrapper'

export const DesktopNavbar = () => {
	const isMobile = useBreakpointChecker()

	if (isMobile) return

	return (
		<>
			<Image
				src={Logo1}
				alt="logo"
				role="banner"
				className="block w-25 mb-1 object-contain select-none lg:w-38 lg:pt-1 lg:mb-0"
				loading="eager"
				preload
			/>
			<nav className="flex justify-center items-center gap-8.5">
				<div className="flex gap-5.25 text-black">
					{NAV_ELEMENTS.map((link) => (
						<DesktopLink key={`navbar-desktop-link-${link.text}`} link={link} />
					))}
				</div>
				<div className="flex gap-1.5 items-center justify-center *:transition-all *:hover:scale-110 *:hover:brightness-125 *:cursor-pointer">
					<LinksWithIconsWrapper links={NAV_SOCIALS_DESKTOP} />
				</div>
			</nav>
		</>
	)
}
