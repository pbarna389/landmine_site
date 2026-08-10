type CardBodyProps = React.PropsWithChildren

export const CardBody = ({ children }: CardBodyProps) => {
	return (
		<div className="flex flex-col items-center bg-section-body gap-5 w-full text-center lg:text-justify">
			{children}
		</div>
	)
}
