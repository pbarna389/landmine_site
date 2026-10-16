'use client'

import { createContext } from 'react'

import type { RouteState } from './types'

const subNavbarStateInitialValues: {
	setState: React.Dispatch<React.SetStateAction<RouteState>>
	state: RouteState
} = {
	state: { selectedRoute: null, recursionLevel: 0, isOpen: false },
	setState: () => {}
}

export const SubNavbarStateContext = createContext<typeof subNavbarStateInitialValues>(
	subNavbarStateInitialValues
)
