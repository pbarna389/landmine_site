'use client'

import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'

type VideoMainSectionProps = React.PropsWithChildren

export const VideoMainSection = ({ children }: VideoMainSectionProps) => {
	const isMobile = useBreakpointChecker()

	const bgUrl = isMobile ? '/sorozatokhtr.jpg' : '/sorozatokhtr2.jpg'

	return (
		<section
			className={`flex flex-col gap-5 mt-2 w-full relative bg-[url(${bgUrl})] bg-fixed bg-cover object-cover min-h-screen overflow-hidden after:content-[''] after:absolute after:w-full after:h-screen after:bg-linear-to-t after:from-white after:to-transparent`}
		>
			{children}
		</section>
	)
}
