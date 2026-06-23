import { use } from 'react'

import { ContentValueContext } from '../ContentValueContext'

export const useContentValueContext = () => {
	const state = use(ContentValueContext)

	if (!state)
		throw new Error('useContentValueContext is used outside of HeightRefContextProvider!')

	return state
}
