'use client'

import { useParams } from 'next/navigation'

import { useContentValueContext } from '../../context'

export const MainSection = ({ children }: React.PropsWithChildren) => {
	const { value } = useContentValueContext()
	const params = useParams()

	const subPageChecker = !!Object.keys(params).length

	const getHeight = subPageChecker ? { height: `${value + 300}px` } : { height: 'auto' }

	return (
		<main
			className={`flex flex-col min-h-screen items-center justify-center relative pt-1 bg-zinc-50 font-raleway *:text-white`}
			style={getHeight}
		>
			{children}
		</main>
	)
}
