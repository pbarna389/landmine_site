import Image from 'next/image'

import { Card } from '@/components'

import { PricesCardBody } from './PricesCardBody'
import type { PRICES_CONTENT } from '../../constants/constants'

type PricesCardProps = {
	card: (typeof PRICES_CONTENT)['content'][0]
	idx: number
}

export const PricesCard = ({ card, idx }: PricesCardProps) => {
	return (
		<Card className="gap-5 rounded-none pt-0 pb-0 pr-0 pl-0 w-full lg:min-h-120 group">
			<Card.Header idx={idx}>{card.title.text}</Card.Header>
			<Card.Body>
				<Image
					className="w-1/2 sm:w-3/8 lg:w-11/20"
					src={card.image.src}
					alt={card.image.alt}
				/>
				<PricesCardBody {...card} />
			</Card.Body>
		</Card>
	)
}
