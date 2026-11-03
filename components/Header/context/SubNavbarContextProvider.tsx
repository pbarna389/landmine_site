'use client'

import type { PropsWithChildren } from 'react'
import { useCallback, useRef, useState } from 'react'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import type { RouteState } from './types'

import { SubNavbarHandlersContext } from './SubNavbarHandlersContext'
import { SubNavbarRefContext } from './SubNavbarRefContext'
import { SubNavbarStateContext } from './SubNavbarStateContext'

const stateInitialValues: RouteState = {
	isSidebarOpen: false,
	isOpen: false,
	selectedRoute: null
}

// TODO: Update the href creation - it could be calculated on creation

export const SubNavbarContextProvider = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState<RouteState>(stateInitialValues)
	const ref = useRef<HTMLDivElement | null>(null)

	const handleOutsideClick = useCallback(() => {
		setState({
			isSidebarOpen: false,
			isOpen: false,
			selectedRoute: null
		})
	}, [])

	const modifiedRef = useOutsideClick(handleOutsideClick, ref)

	const handleSidebarState = useCallback(() => {
		setState((prev) => ({
			...prev,
			isSidebarOpen: !prev.isSidebarOpen
		}))
	}, [setState])

	const handleNavbarClick = useCallback(
		(route: string, baseHref: string) => {
			setState((prev) =>
				state.selectedRoute?.[0].routeName === route
					? stateInitialValues
					: {
							...prev,
							isOpen: true,
							selectedRoute: [
								{
									routeName: route,
									routeHref: baseHref,
									selectedChild: null
								}
							]
						}
			)
		},
		[state.selectedRoute]
	)

	const handleBackNavigation = useCallback(() => {
		if (state.selectedRoute?.length === 1) {
			setState((prev) => ({
				...prev,
				selectedRoute: null
			}))

			return
		}

		const newRoute = state?.selectedRoute?.slice(0, -1)

		setState((prev) => ({
			...prev,
			selectedRoute: newRoute ? newRoute : null
		}))
	}, [state.selectedRoute])

	const handlePointerEnter = useCallback(
		(route: string, layer: number, childIdx: number, addedHref: string) => {
			if (state.selectedRoute?.[layer]?.routeName === route) return null

			if (layer === 0) {
				handleNavbarClick(route, addedHref)

				return
			}

			const newRoute = state.selectedRoute
				? [
						...state.selectedRoute.slice(0, layer),
						{
							routeName: route,
							routeHref: `${state.selectedRoute[layer - 1].routeHref}${addedHref}`,
							selectedChild: null
						}
					]
				: null

			if (newRoute) newRoute[layer - 1] = { ...newRoute[layer - 1], selectedChild: childIdx }

			setState((prev) => ({
				...prev,
				selectedRoute: newRoute
			}))
		},
		[state.selectedRoute, handleNavbarClick]
	)

	return (
		<SubNavbarRefContext value={{ ref: modifiedRef }}>
			<SubNavbarHandlersContext
				value={{
					handleNavbarClick,
					handleOutsideClick,
					handlePointerEnter,
					handleSidebarState,
					handleBackNavigation
				}}
			>
				<SubNavbarStateContext value={{ state, setState }}>{children}</SubNavbarStateContext>
			</SubNavbarHandlersContext>
		</SubNavbarRefContext>
	)
}
