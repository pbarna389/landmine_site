import type { SectionProps } from './types'

import { Cube } from './Cube'

type SectionHeaderProps = SectionProps & {
	shouldBeEmpty?: boolean
	side?: 'left' | 'right'
}

export const SectionHeader = ({
	children,
	className = '',
	side = 'left',
	shouldBeEmpty = false
}: SectionHeaderProps) => {
	const isLeftSide = side === 'left'

	return (
		<div
			className={`w-full pt-11 pb-14 overflow-hidden relative *:text-black ${shouldBeEmpty ? 'bg-transparent' : 'bg-section-header-background shadow-2xl'}  ${className}`}
		>
			{!shouldBeEmpty && (
				<>
					<Cube isLeftSide={isLeftSide} />
					<Cube isLeftSide={isLeftSide} firstElement={false} className="hidden sm:block" />
				</>
			)}
			{children}
		</div>
	)
}
