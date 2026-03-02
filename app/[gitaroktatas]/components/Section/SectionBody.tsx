import type { SectionProps } from './types'

type SectionBodyProps = Omit<SectionProps, 'className'> & {
	className?: string
}

export const SectionBody = ({ children, className = '' }: SectionBodyProps) => {
	return (
		<div className={`relative -top-17.5 font-montserrat text-black ${className}`}>
			{children}
		</div>
	)
}
