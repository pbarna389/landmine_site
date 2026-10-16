import { createContext } from 'react'

const subNavbarHandlersInitialState = {
	handleClick: (_route: string) => {},
	handleOutsideClick: () => {}
}

export const SubNavbarHandlersContext = createContext<
	typeof subNavbarHandlersInitialState
>(subNavbarHandlersInitialState)
