import { use } from 'react'

import { SubNavbarStateContext } from '../SubNavbarStateContext'

export const useSubNavbarState = () => {
	const state = use(SubNavbarStateContext)

	if (!state) {
		throw new Error('useSubNavbarStates is used outside of SubNavbarContext!')
	}

	return state
}
