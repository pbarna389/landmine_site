'use client'

import { createContext } from 'react'

export const contentContextInitialValues: { value: number } = { value: 0 }

export const ContentValueContext = createContext<typeof contentContextInitialValues>(
	contentContextInitialValues
)
