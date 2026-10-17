import { createContext } from 'react'

const subNavbarHandlersInitialState = {
	handleClick: (_route: string) => {},
	handleOutsideClick: () => {},
	handlePointerEnter: (_route: string, _layer: number, _idx: number) => {}
}

export const SubNavbarHandlersContext = createContext<
	typeof subNavbarHandlersInitialState
>(subNavbarHandlersInitialState)
