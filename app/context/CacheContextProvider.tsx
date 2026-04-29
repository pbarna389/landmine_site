'use client'

import type { PropsWithChildren } from 'react'
import { useReducer } from 'react'

import { CacheStateContext, cacheStateInitialValues } from './CacheStateContext'
import { CacheDispatchContext } from './CacheStateDispatchContext'
import { cacheReducer } from './reducer'

export const CacheContextProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(cacheReducer, cacheStateInitialValues)

	return (
		<>
			<CacheDispatchContext value={{ dispatch }}>
				<CacheStateContext value={state}>{children}</CacheStateContext>
			</CacheDispatchContext>
		</>
	)
}
