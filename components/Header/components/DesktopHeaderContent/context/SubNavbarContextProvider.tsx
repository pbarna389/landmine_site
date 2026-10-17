'use client'

import type { PropsWithChildren } from 'react'
import { useCallback, useRef, useState } from 'react'

import { useDisableScrolling } from '@/hooks/useDisableScrolling'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import type { RouteState } from './types'

import { SubNavbarHandlersContext } from './SubNavbarHandlersContext'
import { SubNavbarRefContext } from './SubNavbarRefContext'
import { SubNavbarStateContext } from './SubNavbarStateContext'

const stateInitialValues: RouteState = {
	isOpen: false,
	selectedRoute: null
}

export const SubNavbarContextProvider = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState<RouteState>(stateInitialValues)
	const ref = useRef<HTMLDivElement | null>(null)

	useDisableScrolling(state.isOpen)

	const handleOutsideClick = useCallback(() => {
		setState({
			selectedRoute: null,
			isOpen: false
		})
	}, [])

	const modifiedRef = useOutsideClick(handleOutsideClick, ref)

	const handleClick = useCallback(
		(route: string, baseHref: string) => {
			setState(() =>
				state.selectedRoute?.[0].routeName === route
					? stateInitialValues
					: {
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

	const handlePointerEnter = useCallback(
		(route: string, layer: number, childIdx: number, addedHref: string) => {
			if (state.selectedRoute?.[layer]?.routeName === route) return null

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
		[state.selectedRoute]
	)

	return (
		<SubNavbarRefContext value={{ ref: modifiedRef }}>
			<SubNavbarHandlersContext
				value={{ handleClick, handleOutsideClick, handlePointerEnter }}
			>
				<SubNavbarStateContext value={{ state, setState }}>{children}</SubNavbarStateContext>
			</SubNavbarHandlersContext>
		</SubNavbarRefContext>
	)
}
