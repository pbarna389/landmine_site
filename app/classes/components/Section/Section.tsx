import type { SectionProps } from './types'

import { SectionBody } from './SectionBody'
import { SectionHeader } from './SectionHeader'

export const Section = ({ children, className, id }: SectionProps) => {
	return (
		<section
			id={id}
			className={`flex flex-col bg-white items-center justify-center w-full *:font-montserrat *:text-center pb-28 ${className}`}
		>
			{children}
		</section>
	)
}

Section.Header = SectionHeader
Section.Body = SectionBody
