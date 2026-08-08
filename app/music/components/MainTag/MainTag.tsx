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
			className={`flex flex-col min-h-screen items-center justify-center relative pt-1 bg-zinc-50 font-raleway *:text-white`}
			style={adjustedElementHeight}
		>
			{children}
		</main>
	)
}
