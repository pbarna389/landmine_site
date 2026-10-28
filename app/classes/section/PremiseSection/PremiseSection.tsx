import { PremiseCard } from './components'
import type { PREMISE_CONTENT } from './constants/constants'

import { Section } from '../../components'

type PremiseSectionProps = {
	data: typeof PREMISE_CONTENT
}

export const PremiseSection = ({ data }: PremiseSectionProps) => {
	const { id, header, content } = data

	return (
		<Section id={id} className="">
			<Section.Header id={id}>
				<div className="flex flex-col gap-4 items-center justify-center mb-17">
					<h2 className="possibilities-heading-text font-bold capitalize">{header.title}</h2>
					<span className="h-0.5 w-15 bg-section-heading-highlight" />
					<h2 className="classes-heading-text uppercase">{header.subTitle}</h2>
				</div>
			</Section.Header>
			<Section.Body
				id={id}
				className="flex flex-col items-center justify-center gap-11 sm:w-full lg:items-stretch lg:w-[85%] xl:w-[95%] 2xl:w-[85%] h-full *:text-black lg:flex-row lg:row"
			>
				{content.map((card) => (
					<PremiseCard key={`premise-card-${card.title.text}`} card={card} />
				))}
			</Section.Body>
		</Section>
	)
}
