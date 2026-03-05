type CardHeaderProps = {
	idx: number
	title: string
}

export const CardHeader = ({ title, idx }: CardHeaderProps) => {
	return (
		<div
			className={`w-full p-4 pl-0 pr-0 capitalize select-none cursor-default ${idx % 2 === 0 ? 'bg-yellow-800/60' : 'bg-yellow-800/80'} text-white`}
		>
			{title}
		</div>
	)
}
