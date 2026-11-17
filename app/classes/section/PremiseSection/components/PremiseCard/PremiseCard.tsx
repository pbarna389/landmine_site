import Image from 'next/image'

import { Card, RecursiveContent } from '@/components'

import type { PREMISE_CONTENT } from '../../constants/constants'
type PremiseCardProps = {
	card: (typeof PREMISE_CONTENT)['content'][0]
}

export const PremiseCard = ({ card }: PremiseCardProps) => {
	return (
		<Card className="rounded-md gap-5 group p-10 sm:w-full lg:min-h-120 lg:p-5 xl:p-6">
			<Card.Body>
				<Image
					className="w-full min-h-50 sm:w-1/2 md:w-3/4 lg:w-4/5 xl:w-3/4"
					src={card.image.src}
					alt={card.image.alt}
				/>
				<h3 className="classes-heading-text uppercase text-wrap xl:text-nowrap select-none cursor-default">
					{card.title.text}
					<span className="ml-1">{card.title.emoticon}</span>
				</h3>
				<hr className="w-full border border-black/20" />
				<RecursiveContent data={card.textContent.content} level={0} classKey="premiseCard" />
			</Card.Body>
		</Card>
	)
}
