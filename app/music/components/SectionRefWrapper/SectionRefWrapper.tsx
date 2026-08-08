'use client'

import { useHeightRefContext } from '../../context'

export const SectionRefWrapper = ({ children }: React.PropsWithChildren) => {
	const ref = useHeightRefContext()

	return (
		<section
			ref={ref}
			className="absolute transform -translate-x-1/2 top-30 left-1/2 flex flex-col gap-16 items-center justify-center"
		>
			{children}
		</section>
	)
}
