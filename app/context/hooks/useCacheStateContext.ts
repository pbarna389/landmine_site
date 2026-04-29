import { use } from 'react'

import { CacheStateContext } from '../CacheStateContext'

export const useCacheStateContext = () => {
	const state = use(CacheStateContext)

	if (!state) {
		throw new Error('useCacheStateContext is used outside of CacheContextProvider!')
	}

	return state
}
