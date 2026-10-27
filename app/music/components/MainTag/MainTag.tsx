'use client'

import { useParams } from 'next/navigation'

import { useContentValueContext } from '../../context'

export const MainTag = ({ children }: React.PropsWithChildren) => {
	const { value } = useContentValueContext()
	const params = useParams()

	const subPageChecker = !!Object.keys(params).length

	const adjustedElementHeight = subPageChecker
		? { height: `${value + 300}px` }
		: { height: 'auto' }

	return (
		<main
			className={`wrapper-base min-h-screen justify-center relative font-raleway *:text-white`}
			style={adjustedElementHeight}
		>
			{children}
		</main>
	)
}
