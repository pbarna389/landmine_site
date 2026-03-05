import type { SectionProps } from './types'

import { Cube } from './Cube'

type SectionHeaderProps = SectionProps & {
	side?: 'left' | 'right'
}

export const SectionHeader = ({
	children,
	className = '',
	side = 'left'
}: SectionHeaderProps) => {
	return (
		<div
			className={`w-full pt-11 pb-14 overflow-hidden bg-section-header-bg *:text-black relative shadow-2xl ${className}`}
		>
			<div
				className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-3 sm:right-3 md:right-5 lg:right-7.25'} transform -translate-1/2 translate-x-2/10 sm:space-y-3 sm:top-15/200 md:space-y-5 md:top-31/240 lg:space-y-7 lg:top-8/45`}
			>
				<Cube />
				<Cube firstElement={false} className="hidden sm:block" />
			</div>
			{children}
		</div>
	)
}
