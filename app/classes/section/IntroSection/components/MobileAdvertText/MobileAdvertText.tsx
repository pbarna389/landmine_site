type MobileAdvertTextProps = {
	header: string
	text: string[]
}

export const MobileAdvertText = ({ header, text }: MobileAdvertTextProps) => {
	return (
		<>
			<h2 className="uppercase text-lg">{header}</h2>
			<div className="text-center">
				{text.map((paragraph, pIndex) => (
					<p className="text-sm" key={`mobile-content-mobile-advert-paragraph-${pIndex}`}>
						{paragraph}
					</p>
				))}
			</div>
		</>
	)
}
