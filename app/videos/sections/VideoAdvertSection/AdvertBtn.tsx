type AdvertBtnProps = {
	className: string
	text: string
}

export const AdvertBtn = ({ className, text }: AdvertBtnProps) => {
	return (
		<button type="button" className={className}>
			{text}
		</button>
	)
}
