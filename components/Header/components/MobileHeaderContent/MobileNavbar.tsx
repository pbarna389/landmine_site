'use client'

import { useRef, useState } from 'react'

import { useDisableScrolling } from '@/hooks/useDisableScrolling'
import { useOutsideClick } from '@/hooks/useOutsideClick'

import { MobileNavbarContent } from './MobileNavbarContent'

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	useDisableScrolling(isOpen)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const handleOutSideClick = () => {
		setIsOpen(false)
	}

	const navbarRef = useRef<HTMLDivElement | null>(null)

	const ref = useOutsideClick<HTMLDivElement>(handleOutSideClick, navbarRef)

	return (
		<>
			<div ref={ref}>
				<div
					className={`block text-black relative w-4 h-4 cursor-pointer before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-gray-700 before:rounded ${isOpen ? 'before:-rotate-45 before:top-1/2' : ''} before:transition after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gray-700 after:rounded after:bottom-0 after:transition ${isOpen ? 'after:rotate-45 after:top-1/2' : ''}`}
					onClick={handleClick}
				>
					<span
						className={`absolute bg-gray-700 transform -translate-1/2 top-1/2 left-1/2 h-0.5 w-full transition rounded ${isOpen ? 'opacity-0' : 'opacity-100'}`}
					/>
				</div>
				<MobileNavbarContent handleClick={handleClick} isOpen={isOpen} />
			</div>
			<span
				className={`absolute top-8 left-0 w-full h-screen transition-opacity backdrop-blur-sm duration-300 ${isOpen ? 'z-1 opacity-100 scale-100' : '-z-1 opacity-0 scale-0'}`}
			/>
		</>
	)
}
