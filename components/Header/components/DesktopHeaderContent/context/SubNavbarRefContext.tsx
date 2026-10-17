'use client'

import type { RefObject } from 'react'
import { createContext } from 'react'

const subNavbarRefInitialState: { ref: RefObject<HTMLDivElement | null> | null } = {
	ref: null
}

export const SubNavbarRefContext = createContext<typeof subNavbarRefInitialState>(
	subNavbarRefInitialState
)
