'use client'

import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'

import { Icons } from '../Icons'

const scrollToTop = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
	e.currentTarget.blur()

	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

export const NavigatorBtn = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const callback = () => {
			setIsVisible(window.scrollY > 0)
		}

		callback()

		window.addEventListener('scroll', callback, { passive: true })

		return () => window.removeEventListener('scroll', callback)
	}, [])

	return (
		<button
			aria-label="Vissza az oldal tetejére"
			disabled={!isVisible}
			className={`fixed z-3 bottom-1/24 rounded-full p-2.5 border-4 border-gray-400 bg-black/50 transition-all duration-400 hover:bg-black hover:scale-115 focus-visible:bg-black focus-visible:scale-115 focus-visible:outline-none focus-visible:shadow-none active:border-gray-300 active:bg-black/75 active:scale-85 cursor-pointer ${isVisible ? 'right-1/24' : '-right-1/4 sm:-right-24'} `}
			type="button"
			onClick={scrollToTop}
		>
			<Icons iconVars="arrowUp" />
		</button>
	)
}
