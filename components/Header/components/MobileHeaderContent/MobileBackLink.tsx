'use client'

import { Icons } from '@/components/Icons'

import { useSubNavbarHandlers } from '../../context'

export const MobileBackLink = () => {
	const { handleBackNavigation } = useSubNavbarHandlers()

	return (
		<li className="basic route link w-full bg-header-mobile-bg border border-header-mobile-border">
			<button
				type="button"
				aria-label="vissza az előző mobil navigációs menühöz"
				className=" flex items-center justify-center p-1 w-full h-full text-center"
				onClick={handleBackNavigation}
			>
				<Icons iconVars={'chevronLeft'} />
			</button>
		</li>
	)
}
