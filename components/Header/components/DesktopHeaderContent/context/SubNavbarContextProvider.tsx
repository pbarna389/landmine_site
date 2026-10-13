'use client'

import type { PropsWithChildren } from 'react'
import { useRef, useState } from 'react'

import { useDisableScrolling } from '@/hooks/useDisableScrolling'
import { useOutsideClick } from '@/hooks/useOutsideClick'

import { SubNavbarHandlersContext } from './SubNavbarHandlersContext'
import { SubNavbarRefContext } from './SubNavbarRefContext'
import { SubNavbarStateContext } from './SubNavbarStateContext'

export const SubNavbarContextProvider = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState<{ isOpen: boolean; selectedRoute: null | string }>({
		isOpen: false,
		selectedRoute: null
	})
	const ref = useRef<HTMLDivElement | null>(null)

	useDisableScrolling(state.isOpen)

	const handleOutsideClick = () => {
		setState({
			selectedRoute: null,
			isOpen: false
		})
	}

	const modifiedRef = useOutsideClick(handleOutsideClick, ref)

	const handleClick = (route: string) => {
		setState((prev) => ({
			isOpen: state.selectedRoute === route ? !prev.isOpen : true,
			selectedRoute: route
		}))
	}

	return (
		<SubNavbarRefContext value={{ ref: modifiedRef }}>
			<SubNavbarStateContext value={{ state, setState }}>
				<SubNavbarHandlersContext value={{ handleClick }}>
					{children}
				</SubNavbarHandlersContext>
			</SubNavbarStateContext>
		</SubNavbarRefContext>
	)
}
