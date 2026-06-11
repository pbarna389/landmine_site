'use client'

import type { PropsWithChildren } from 'react'
import { useLayoutEffect, useRef, useState } from 'react'

import { ContentValueContext } from './ContentValueContext'
import { HeightRefContext } from './HeightRefContext'

export const HeightRefContextProvider = ({ children }: PropsWithChildren) => {
	const [contentHeight, setContentHeight] = useState({ value: 0 })

	const ref = useRef<HTMLDivElement | null>(null)

	useLayoutEffect(() => {
		if (!ref.current) return

		const resizeObserver = new ResizeObserver(() => {
			setContentHeight({ value: ref.current!.offsetHeight })
		})

		resizeObserver.observe(ref.current)

		setContentHeight({ value: ref.current!.offsetHeight })

		return () => resizeObserver.disconnect()
	}, [])

	return (
		<>
			<HeightRefContext value={ref}>
				<ContentValueContext value={contentHeight}>{children}</ContentValueContext>
			</HeightRefContext>
		</>
	)
}
