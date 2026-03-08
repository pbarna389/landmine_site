'use client'

import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'

type VideoMainSectionProps = React.PropsWithChildren

export const VideoMainSection = ({ children }: VideoMainSectionProps) => {
	const isMobile = useBreakpointChecker()

	const bgUrl = isMobile ? '/sorozatokhtr.jpg' : '/sorozatokhtr2.jpg'

	return (
		<section
			className={`flex flex-col mt-2 w-full bg-[url(${bgUrl})] bg-fixed bg-cover overflow-hidden after:content-['']`}
		>
			<div className="w-full h-full space-y-10 p-32 pl-5 pr-5 sm:pl-15 sm:pr-15 md:pl-20 md:pr-20 bg-linear-to-b from-transparent to-white">
				{children}
			</div>
		</section>
	)
}
