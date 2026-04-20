import { use } from 'react'

import { CacheDispatchContext } from '../CacheStateDispatchContext'

export const useCacheStateDispatchContext = () => {
	const { dispatch } = use(CacheDispatchContext)

	if (!dispatch) {
		throw new Error('useCacheStateDispatchContext is used outside of CacheContextProvider!')
	}

	return dispatch
}
