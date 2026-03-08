//TODO: Update the header to handle children and update all related components to the new implementation

type CardHeaderProps = React.PropsWithChildren & {
	idx: number
	className?: string
}

export const CardHeader = ({ children, idx, className }: CardHeaderProps) => {
	return (
		<div
			className={`w-full p-4 pl-0 pr-0 capitalize select-none cursor-default ${idx % 2 === 0 ? 'bg-yellow-800/60' : 'bg-yellow-800/80'} text-white ${className}`}
		>
			{children}
		</div>
	)
}
