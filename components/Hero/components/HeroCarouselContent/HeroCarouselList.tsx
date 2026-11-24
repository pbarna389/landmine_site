type CarouselListProps = {
	subText: string[]
}

export const HeroCarouselList = ({ subText }: CarouselListProps) => {
	return (
		<ul className="space-y-3 text-[16px] leading-5 md:text-[20px] 2xl:text-[22px] *:font-medium *:sm:font-normal *:text-white">
			{subText.map((text, idx) => (
				<li key={`carousel-list-el-${text}-${idx}`}>{text}</li>
			))}
		</ul>
	)
}
