'use client'

import Image from 'next/image'

import Logo1 from '@/public/logo3.png'

import { MobileIcons } from './MobileIcons'
import { MobileRoutes } from './MobileRoutes'
import { useSubNavbarState } from '../../context'

export const MobileNavbarContent = () => {
	const {
		state: { isSidebarOpen }
	} = useSubNavbarState()

	return (
		<nav
			aria-label="Fő navigáció - mobil"
			className={`fixed flex flex-col overflow-y-auto overflow-x-hidden items-center border-l-2 border-r-2 border-t-0 border-b-0 border-white/98 z-2 top-8 bottom-0 right-0 bg-white/98 origin-right transition duration-300 opacity-97 *:brightness-115 ${isSidebarOpen ? 'scale-x-100' : 'scale-x-0'}`}
		>
			<ul className="flex flex-col w-full justify-center items-center">
				<MobileRoutes />
			</ul>
			<Image
				src={Logo1}
				alt="logo"
				className="object-contain w-75 p-10"
				loading="eager"
				preload
			/>
			<div className="flex flex-col w-full justify-center items-center ">
				<MobileIcons />
			</div>
		</nav>
	)
}
