'use client'

import type { Dispatch } from 'react'
import { createContext } from 'react'

import type { CACHE_ACTION_TYPES } from './reducer'

const cacheDispatchState: {
	dispatch?: Dispatch<CACHE_ACTION_TYPES<unknown>>
} = {
	dispatch: undefined
}

export const CacheDispatchContext =
	createContext<typeof cacheDispatchState>(cacheDispatchState)
