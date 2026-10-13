'use client'

import { createContext } from 'react'

const subNavbarStateInitialValues: {
	setState: React.Dispatch<
		React.SetStateAction<{ isOpen: boolean; selectedRoute: null | string }>
	>
	state: { isOpen: boolean; selectedRoute: null | string }
} = {
	state: { selectedRoute: null, isOpen: false },
	setState: () => {}
}

export const SubNavbarStateContext = createContext<typeof subNavbarStateInitialValues>(
	subNavbarStateInitialValues
)
