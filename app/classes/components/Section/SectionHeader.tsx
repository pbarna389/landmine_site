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
	const isLeftSide = side === 'left'

	return (
		<div
			className={`w-full pt-11 pb-14 overflow-hidden bg-section-header-background *:text-black relative shadow-2xl ${className}`}
		>
			<Cube isLeftSide={isLeftSide} />
			<Cube isLeftSide={isLeftSide} firstElement={false} className="hidden sm:block" />
			{children}
		</div>
	)
}
