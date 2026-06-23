import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'

export default function Header() {
	return (
		<header className="fixed z-10 top-0 left-0 w-screen flex items-center justify-between bg-white/93 h-[2.12rem] pr-4.5 pl-3.5 pt-0.5 pb-0.5 shadow-md/16 shadow-black border-green-500 lg:h-[3.2rem] lg:pl-6 lg:pr-9.5">
			<MobileNavbar />
			<DesktopNavbar />
		</header>
	)
}
