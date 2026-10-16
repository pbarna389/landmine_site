'use client'

import type { PropsWithChildren } from 'react'
import { useCallback, useRef, useState } from 'react'

import { useDisableScrolling } from '@/hooks/useDisableScrolling'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import type { RouteState } from './types'

import { SubNavbarHandlersContext } from './SubNavbarHandlersContext'
import { SubNavbarRefContext } from './SubNavbarRefContext'
import { SubNavbarStateContext } from './SubNavbarStateContext'

const stateInitialValues = {
	isOpen: false,
	recursionLevel: 2,
	selectedRoute: null
}

export const SubNavbarContextProvider = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState<RouteState>(stateInitialValues)
	const ref = useRef<HTMLDivElement | null>(null)

	useDisableScrolling(state.isOpen)

	const handleOutsideClick = () => {
		setState({
			selectedRoute: null,
			recursionLevel: 0,
			isOpen: false
		})
	}

	const modifiedRef = useOutsideClick(handleOutsideClick, ref)

	const handleClick = useCallback(
		(route: string) => {
			setState(() =>
				state.selectedRoute?.[0] === route
					? stateInitialValues
					: {
							isOpen: true,
							recursionLevel: 1,
							selectedRoute: [route]
						}
			)
		},
		[state.selectedRoute]
	)

	return (
		<SubNavbarRefContext value={{ ref: modifiedRef }}>
			<SubNavbarHandlersContext value={{ handleClick, handleOutsideClick }}>
				<SubNavbarStateContext value={{ state, setState }}>{children}</SubNavbarStateContext>
			</SubNavbarHandlersContext>
		</SubNavbarRefContext>
	)
}
