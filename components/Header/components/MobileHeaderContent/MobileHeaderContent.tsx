'use client'

import Image from 'next/image'

import Logo2 from '@/public/logo2.png'

import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'

import { MobileNavbar } from './MobileNavbar'

export const MobileHeaderContent = () => {
	const isMobile = useBreakpointChecker()

	if (!isMobile) return

	return (
		<>
			<Image
				src={Logo2}
				alt="logo"
				role="banner"
				className="block w-25 mb-1 object-contain select-none lg:w-38 lg:pt-1 lg:mb-0"
				loading="eager"
			/>
			<MobileNavbar />
		</>
	)
}
