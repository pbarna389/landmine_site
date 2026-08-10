import { PricesCard } from './components'
import type { PRICES_CONTENT } from './constants/constants'

import { Section } from '../../components'

type PricesSectionProps = {
	data: typeof PRICES_CONTENT
}

export const PricesSection = ({ data }: PricesSectionProps) => {
	const { header, content } = data

	return (
		<Section className="shadow-2xl lg:shadow-none">
			<Section.Header>
				<div className="flex flex-col min-h-25 gap-4 items-center justify-center mb-17">
					<h2 className="font-bold capitalize text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px]">
						{header.title}
					</h2>
				</div>
			</Section.Header>
			<Section.Body className="flex flex-col items-center justify-center gap-11 w-full h-full *:text-black lg:flex-row lg:row lg:items-baseline">
				{content.map((card, idx) => (
					<PricesCard key={`prices-card-${card.title.text}`} card={card} idx={idx} />
				))}
			</Section.Body>
		</Section>
	)
}
