import { createContext } from 'react'

const subNavbarHandlersInitialState = {
	handleClick: (_route: string) => {}
}

export const SubNavbarHandlersContext = createContext<
	typeof subNavbarHandlersInitialState
>(subNavbarHandlersInitialState)
