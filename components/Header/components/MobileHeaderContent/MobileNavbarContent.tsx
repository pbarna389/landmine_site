'use client'

import Image from 'next/image'

import Logo1 from '@/public/logo3.png'

import { MobileIcons } from './MobileIcons'
import { MobileRoutes } from './MobileRoutes'
import type { NavItem } from '../../constants/constants'
import { useSubNavbarState } from '../../context'

type MobileNavbarProps = {
	content?: NavItem[]
	recursionLayer?: number
}

export const MobileNavbarContent = ({ content, recursionLayer }: MobileNavbarProps) => {
	const {
		state: { isSidebarOpen }
	} = useSubNavbarState()

	const currentZIdx = recursionLayer ? recursionLayer + 1 : 2

	return (
		<nav
			aria-label="Fő navigáció - mobil"
			className={`fixed flex flex-col overflow-y-auto overflow-x-hidden items-center border-l-2 border-r-2 border-t-0 border-b-0 border-white/98 z-${currentZIdx} top-8 bottom-0 right-0 bg-white/98 origin-right transition duration-300 opacity-97 *:brightness-115 ${isSidebarOpen ? 'scale-x-100' : 'scale-x-0'} `}
		>
			<ul className="flex flex-col w-full justify-center items-center">
				<MobileRoutes content={content} recursionLayer={recursionLayer} />
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
