'use client'

import { useEffect, useState } from 'react'

/**
 * Hook to track if the viewport is below a given breakpoint.
 * @param breakpoint - the max-width in pixels to check
 */

export const useBreakpointChecker = (breakpoint = 1280) => {
	const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

	const [isBelow, setIsBelow] = useState(mediaQuery.matches)

	const handleChange = (matches: boolean) => {
		setIsBelow(matches)
	}

	useEffect(() => {
		const listener = (e: MediaQueryListEvent) => handleChange(e.matches)

		mediaQuery.addEventListener('change', listener)

		return () => mediaQuery.removeEventListener('change', listener)
	}, [breakpoint, mediaQuery])

	return isBelow
}
