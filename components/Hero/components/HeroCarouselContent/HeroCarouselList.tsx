type CarouselListProps = {
	subText: string[]
}

export const HeroCarouselList = ({ subText }: CarouselListProps) => {
	return (
		<ul className="space-y-3 text-sm md:text-md *:font-white *:font-medium">
			{subText.map((text, idx) => (
				<li key={`carousel-list-el-${text}-${idx}`}>{text}</li>
			))}
		</ul>
	)
}
