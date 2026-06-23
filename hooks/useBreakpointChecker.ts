'use client'

import { useCallback, useSyncExternalStore } from 'react'

//!TODO: remove the resize event listener before shipping from the subscribe function - not needed

/**
 * Hook to track if the viewport is below a given breakpoint.
 *
 * @remarks
 *
 * The resize event listener is only for a developer mode duck tape for Opera - should be removed before shipping!
 *
 * @param breakpoint - the max-width in pixels to check
 * @param serverValue -
 */

type QueryPropType = `(max-width: ${string}px)`

export const useBreakpointChecker = (breakpoint = 1280, serverValue = false) => {
	const query: QueryPropType = `(max-width: ${breakpoint - 1}px)`

	const subscribe = useCallback(
		(callback: () => void) => {
			const mediaQuery = window.matchMedia(query)

			mediaQuery.addEventListener('change', callback)
			window.addEventListener('resize', callback)

			return () => {
				mediaQuery.removeEventListener('change', callback)
				window.removeEventListener('resize', callback)
			}
		},
		[query]
	)

	const getSnapshot = useCallback(() => {
		return window.matchMedia(query).matches
	}, [query])

	const getServerSnapshot = useCallback(() => {
		return serverValue
	}, [serverValue])

	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
