'use client'

import type { RefObject } from 'react'
import { createContext } from 'react'

export const heightRefInitialValues: RefObject<HTMLDivElement | null> = { current: null }

export const HeightRefContext =
	createContext<typeof heightRefInitialValues>(heightRefInitialValues)
