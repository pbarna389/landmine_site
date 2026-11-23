type CarouselListProps = {
	subText: string[]
}

export const HeroCarouselList = ({ subText }: CarouselListProps) => {
	return (
		<ul className="space-y-2 text-sm text-[clamp(16px,17px,18px)] sm:text-[18px] md:text-[20px] 2xl:text-[22px] *:font-normal *:font-white">
			{subText.map((text, idx) => (
				<li key={`carousel-list-el-${text}-${idx}`}>{text}</li>
			))}
		</ul>
	)
}
