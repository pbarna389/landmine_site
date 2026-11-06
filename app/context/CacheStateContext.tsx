'use client'

import { createContext } from 'react'

import type { CACHE_STATE } from './reducer'

export const cacheStateInitialValues: CACHE_STATE = {
	videos: {},
	music: {},
	articles: {}
}

export const CacheStateContext = createContext<typeof cacheStateInitialValues>(
	cacheStateInitialValues
)
