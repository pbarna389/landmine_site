'use client'

import { createContext, type Dispatch } from 'react'

import type { CACHE_ACTION_TYPES } from './reducer'

const cacheDispatchState: { dispatch?: Dispatch<CACHE_ACTION_TYPES> } = {
	dispatch: undefined
}

export const CacheDispatchContext =
	createContext<typeof cacheDispatchState>(cacheDispatchState)
