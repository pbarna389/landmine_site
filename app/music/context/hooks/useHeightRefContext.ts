import { use } from 'react'

import { HeightRefContext } from '../HeightRefContext'

export const useHeightRefContext = () => {
	const state = use(HeightRefContext)

	if (!state)
		throw new Error('useHeightRefContext is used outside of HeightRefContextProvider!')

	return state
}
