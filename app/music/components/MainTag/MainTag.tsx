'use client'

import { useParams } from 'next/navigation'

import { useContentValueContext } from '../../context'

export const MainTag = ({ children }: React.PropsWithChildren) => {
	const { value } = useContentValueContext()
	const params = useParams()

	const subPageChecker = !!Object.keys(params).length

	const adjustedElementHeight = subPageChecker
		? { height: `${value + 240}px`, translate: `` }
		: { height: 'auto' }

	return (
		<main
			className={`wrapper-base min-h-screen justify-center transition-[height] duration-500 relative font-raleway bg-black *:text-white`}
			style={adjustedElementHeight}
		>
			{children}
		</main>
	)
}
