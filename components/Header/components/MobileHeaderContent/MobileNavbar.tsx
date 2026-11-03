'use client'

import { useDisableScrolling } from '@/hooks/useDisableScrolling'

import { MobileNavbarContent } from './MobileNavbarContent'
import { useSubNavbarHandlers, useSubNavbarRef, useSubNavbarState } from '../../context'

export const MobileNavbar = () => {
	const { state } = useSubNavbarState()
	const { handleSidebarState } = useSubNavbarHandlers()
	const { ref } = useSubNavbarRef()

	useDisableScrolling(state.isSidebarOpen)

	return (
		<>
			<div ref={ref} className="portal-target">
				<button
					type="button"
					aria-label={`${state.isSidebarOpen ? 'mobil navigációs menü bezárása' : 'mobil navigációs menü kinyitása'}`}
					className={`block border relative w-4 h-4 cursor-pointer before:content-['']  before:absolute before:h-0.5 before:top-0 before:left-0 before:w-full before:bg-gray-700 before:rounded ${state.isSidebarOpen ? 'before:-rotate-45 before:top-1/2' : ''} before:transition after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gray-700 after:rounded after:bottom-0 after:left-0 after:transition ${state.isSidebarOpen ? 'after:rotate-45 after:top-1/2' : ''}`}
					onClick={handleSidebarState}
				>
					<span
						className={`absolute bg-gray-700 transform -translate-1/2 top-1/2 left-1/2 h-0.5 w-full transition rounded ${state.isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}
					/>
				</button>
				<MobileNavbarContent />
			</div>
			<span
				className={`absolute top-8 left-0 w-full h-screen transition-opacity backdrop-blur-sm duration-300 ${state.isSidebarOpen ? 'z-1 opacity-100 scale-100' : '-z-1 opacity-0 scale-0'}`}
			/>
		</>
	)
}
