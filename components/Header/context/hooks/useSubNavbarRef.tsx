import { use } from 'react'

import { SubNavbarRefContext } from '../SubNavbarRefContext'

export const useSubNavbarRef = () => {
	const ref = use(SubNavbarRefContext)

	if (!ref) {
		throw new Error('useSubNavbarRef is used outside of SubNavbarContextProvider!')
	}

	return ref
}
