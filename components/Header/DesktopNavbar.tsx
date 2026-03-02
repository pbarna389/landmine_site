import Link from 'next/link'

import { NAV_ELEMENTS } from './constants'
import { NAV_ICONS_BASE } from '@/constants/constants'

import { LinksWithIconsWrapper } from '../LinksWithIconsWrapper'

export const DesktopNavbar = () => {
	return (
		<>
			<nav className="flex justify-center items-center gap-8.5">
				<div className="flex gap-5.25 text-black">
					{NAV_ELEMENTS.map((link) => (
						<Link
							href={link.href}
							className="relative font-montserrat uppercase text-[16.4px] font-bold tracking-[2px] h-full text-base transition-all duration-300 cursor-pointer select-none hover:text-hover active:text-hover before:absolute before:content-[''] before:w-full before:scale-x-0 before:origin-right before:h-0.5 before:bottom-0 before:left-0 before:transition-transform before:bg-hover hover:before:w-full hover:before:scale-x-100 hover:before:origin-left active:before:scale-x-100 active:before:w-full active:before:origin-left"
							key={`nav-${link.text}`}
						>
							{link.text}
						</Link>
					))}
				</div>
				<div className="flex gap-1.5 items-center justify-center *:transition-all *:hover:scale-110 *:hover:brightness-125 *:cursor-pointer">
					<LinksWithIconsWrapper links={NAV_ICONS_BASE} />
				</div>
			</nav>
		</>
	)
}
