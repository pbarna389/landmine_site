import Image from 'next/image'

import { Card } from '@/components'
import type { PREMISE_CONTENT } from './constants/constants'

import { PremiseCardBody } from './PremiseCardBody'
import { Section } from '../../components'

type PremiseSectionProps = {
	data: typeof PREMISE_CONTENT
}

export const PremiseSection = ({ data }: PremiseSectionProps) => {
	const { header, content } = data

	return (
		<Section className="">
			<Section.Header>
				<div className="flex flex-col gap-4 items-center justify-center mb-17">
					<h2 className="font-bold capitalize text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px]">
						{header.title}
					</h2>
					<span className="h-0.5 w-15 bg-section-heading-highlight" />
					<h2 className="uppercase text-[14px] sm:text-[16px] md-[18px] lg:text-[20px]">
						{header.subTitle}
					</h2>
				</div>
			</Section.Header>
			<Section.Body className="flex flex-col items-center justify-center gap-11 w-full h-full *:text-black lg:flex-row lg:row lg:items-baseline">
				{content.map((card) => (
					<Card key={card.title.text}>
						<Card.Body>
							<Image
								className="w-1/2 sm:w-3/8 lg:w-11/20"
								src={card.image.src}
								alt={`${card.image.alt}`}
							/>
							<PremiseCardBody {...card} />
						</Card.Body>
					</Card>
				))}
			</Section.Body>
		</Section>
	)
}
