'use client'

import { Icons } from '@/components/Icons'

import { useSubNavbarHandlers } from '../../context'

export const MobileBackLink = () => {
	const { handleBackNavigation } = useSubNavbarHandlers()

	return (
		<li
			className="basic route link w-full flex items-center justify-center p-1 bg-header-mobile-bg border border-header-mobile-border"
			onClick={handleBackNavigation}
		>
			<Icons iconVars={'chevronLeft'} />
		</li>
	)
}
