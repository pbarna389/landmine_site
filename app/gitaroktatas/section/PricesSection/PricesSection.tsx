import { PRICES_CONTENT } from './constants/constants'

import { PricesCardBody } from './PricesCardBody'
import { Card, Section } from '../../components'

export const PricesSection = () => {
	const { header, content } = PRICES_CONTENT

	return (
		<Section className="shadow-2xl lg:shadow-none">
			<Section.Header>
				<div className="flex flex-col gap-4 items-center justify-center mb-17">
					<h2 className="font-bold capitalize text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px]">
						{header.title}
					</h2>
					<span className="h-0.5 w-15 bg-section-heading-highlight" />
				</div>
			</Section.Header>
			<Section.Body className="flex flex-col items-center justify-center gap-11 w-full h-full *:text-black lg:flex-row lg:row lg:items-baseline">
				{content.map((card, idx) => (
					<Card
						key={card.title.text}
						className="gap-5 rounded-none pt-0 pb-0 pr-0 pl-0 w-full lg:min-h-120 group"
					>
						<Card.Header title={card.title.text} idx={idx} />
						<Card.Body content={card}>
							<PricesCardBody {...card} />
						</Card.Body>
					</Card>
				))}
			</Section.Body>
		</Section>
	)
}
