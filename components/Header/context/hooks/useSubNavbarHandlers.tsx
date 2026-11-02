'use client'

import { use } from 'react'

import { SubNavbarHandlersContext } from '../SubNavbarHandlersContext'

export const useSubNavbarHandlersContext = () => {
	const handlers = use(SubNavbarHandlersContext)

	if (!handlers) {
		throw new Error('useSubNavbarHandlers is used outside of SubNavbarContextProvider!')
	}

	return handlers
}
