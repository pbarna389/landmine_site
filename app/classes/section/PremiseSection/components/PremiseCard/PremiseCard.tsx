import Image from 'next/image'

import { Card } from '@/components'

import { PremiseCardBody } from './PremiseCardBody'
import type { PREMISE_CONTENT } from '../../constants/constants'

type PremiseCardProps = {
	card: (typeof PREMISE_CONTENT)['content'][0]
}

export const PremiseCard = ({ card }: PremiseCardProps) => {
	return (
		<Card className="rounded-md gap-5 group p-10 sm:w-full lg:min-h-120 lg:p-5 xl:p-6">
			<Card.Body>
				<Image
					className="w-full min-h-50 sm:w-1/2 md:w-3/4 lg:4/5 xl:w-11/20"
					src={card.image.src}
					alt={card.image.alt}
				/>
				<PremiseCardBody {...card} />
			</Card.Body>
		</Card>
	)
}
