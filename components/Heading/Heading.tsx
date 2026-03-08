type HeadingProps = { text: string; className?: string }

//TODO: expand the component's implementation to handle all type of headings

export const Heading = ({ text, className = '' }: HeadingProps) => {
	return (
		<h2
			className={`text-md relative uppercase font-bold sm:text-2xl md:text-3xl lg:text-xl after:absolute after:-bottom-5 after:transform after:-translate-x-1/2 after:left-1/2 after:w-17 after:h-1 after:bg-section-heading-highlight lg:text-start lg:after:left-0 lg:after:transform-none lg:after:translate-0 ${className}`}
		>
			{text}
		</h2>
	)
}
