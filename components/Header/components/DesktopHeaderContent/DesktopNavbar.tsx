import { SubNavbarContextProvider } from './context'
import { LinksWithIconsWrapper } from '@/components'
import { NAV_SOCIALS_DESKTOP } from '@/constants/constants'

import { DesktopNavbarContent } from './DesktopNavbarContent'

export const DesktopNavbar = () => {
	return (
		<nav
			aria-label="Fő navigáció - asztali PC"
			className="flex justify-center items-center gap-8.5"
		>
			<SubNavbarContextProvider>
				<DesktopNavbarContent />
			</SubNavbarContextProvider>
			<div className="flex gap-1.5 items-center justify-center *:transition-all *:hover:scale-110 *:hover:brightness-125 *:cursor-pointer">
				<LinksWithIconsWrapper links={NAV_SOCIALS_DESKTOP} />
			</div>
		</nav>
	)
}
