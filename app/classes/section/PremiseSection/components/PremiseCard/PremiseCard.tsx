import Image from 'next/image'

import { Card } from '@/components'

import { PremiseCardBody } from './PremiseCardBody'
import type { PREMISE_CONTENT } from '../../constants/constants'

type PremiseCardProps = {
	card: (typeof PREMISE_CONTENT)['content'][0]
}

export const PremiseCard = ({ card }: PremiseCardProps) => {
	return (
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
	)
}
