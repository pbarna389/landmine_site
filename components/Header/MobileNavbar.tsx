'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import { IconContext } from 'react-icons'

import Logo1 from '@/public/logo3.png'

import { useDisableScrolling } from '@/hooks/useDisableScrolling'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { NAV_ELEMENTS, NAV_ICONS_MOBILE } from './constants'

import { Icons } from '../Icons/Icons'

//TODO: FIX THE OVERFLOW ISSUE WITH SOME MOBILES

export const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const handleOutSideClick = () => {
		setIsOpen(false)
	}

	useDisableScrolling(isOpen)

	const ref = useOutsideClick<HTMLDivElement>(handleOutSideClick)

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
				<nav
					className={`fixed flex flex-col overflow-y-auto overflow-x-hidden items-center border-l-2 border-r-2 border-t-0 border-b-0 border-white/98 z-2 top-8 bottom-0 right-0 bg-white/98 origin-right transition duration-300 opacity-97 *:brightness-115 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}
				>
					<div className="flex flex-col w-full justify-center items-center">
						{NAV_ELEMENTS.map((link) => (
							<Link
								href={link.href}
								className="top-0 font-raleway p-1 pl-0 pr-0 bg-header-mobile-bg text-black capitalize border border-header-mobile-border w-full cursor-pointer text-center transition-all duration-50 active:scale-105"
								key={`nav-mobile-main-links-${link.text}`}
								onClick={handleClick}
							>
								{link.text}
							</Link>
						))}
					</div>
					<Image src={Logo1} alt="logo" className="object-contain w-75 p-10" loading="eager" />
					<div className="flex flex-col w-full justify-center items-center ">
						<IconContext value={{ size: '28' }}>
							{NAV_ICONS_MOBILE.map((link) => (
								<Link
									href={link.href}
									target="_blank"
									className="top-0 font-raleway p-1 pl-1.5 pr-0 bg-header-mobile-bg text-black capitalize border border-header-mobile-border w-full cursor-pointer *:transition-all *:duration-50 *:active:scale-110 *:active:brightness-125"
									key={`nav-mobile-community-links-${link.site}`}
								>
									<span className="flex w-full justify-center gap-1.5 items-center ">
										<Icons iconVars={link.site} />
										{link.site}
									</span>
								</Link>
							))}
						</IconContext>
					</div>
				</nav>
			</div>
			<span
				className={`absolute top-8 left-0 w-full h-screen -z-1 opacity-0 transition-opacity backdrop-blur-sm duration-300 ${isOpen && 'z-1 opacity-100'}`}
			/>
		</>
	)
}
