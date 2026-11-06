'use client'

import { createContext } from 'react'

import type { YoutubePlayListItem } from '@/types'

import type { CACHE_STATE } from './reducer'

export const cacheStateInitialValues: CACHE_STATE<YoutubePlayListItem> = {
	videos: {},
	music: {},
	articles: {}
}

export const CacheStateContext = createContext<typeof cacheStateInitialValues>(
	cacheStateInitialValues
)
