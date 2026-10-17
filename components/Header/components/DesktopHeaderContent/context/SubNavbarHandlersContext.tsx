import { createContext } from 'react'

const subNavbarHandlersInitialState = {
	handleClick: (_route: string, _baseHref: string) => {},
	handleOutsideClick: () => {},
	handlePointerEnter: (
		_route: string,
		_layer: number,
		_idx: number,
		_addHref: string
	) => {}
}

export const SubNavbarHandlersContext = createContext<
	typeof subNavbarHandlersInitialState
>(subNavbarHandlersInitialState)
