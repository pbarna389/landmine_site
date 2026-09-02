//TODO: update the component to be more universal
//TODO: update other components to use this component

type ButtonProps = React.PropsWithChildren & {
	className?: string
	onClick?: (...params: unknown[]) => unknown
}

export const Button = ({ children, onClick, className = '' }: ButtonProps) => {
	return (
		<button
			className={`capitalize group/button text-[16px] p-1.5 border cursor-pointer border-hover w-fit rounded transition-colors bg-transparent duration-300 hover:bg-hover hover:text-white active:bg-hover active:text-white focus:bg-hover focus:text-white target:bg-hover target:text-white focus-visible:bg-hover focus-visible:text-white ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
