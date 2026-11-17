import Image from 'next/image'

import { Card, RecursiveContent } from '@/components'

import type { PRICES_CONTENT } from '../../constants/constants'

type PricesCardProps = {
	card: (typeof PRICES_CONTENT)['content'][0]
	idx: number
}

export const PricesCard = ({ card, idx }: PricesCardProps) => {
	return (
		<Card className="gap-5 rounded-none pt-0 pb-0 pr-0 pl-0 w-full lg:min-h-150 group">
			<Card.Header className="classes-heading-text" idx={idx}>
				{card.title.text}
			</Card.Header>
			<Card.Body>
				<Image
					className="w-1/2 sm:w-3/8 lg:w-11/20"
					src={card.image.src}
					alt={card.image.alt}
				/>
				<div className="p-5 text-[19px]">
					<RecursiveContent
						data={card.textContent.content}
						level={0}
						classKey="priceCardMainText"
					/>
					{card.subText && (
						<>
							<h5 className="capitalize font-bold text-[15px] select-none">
								{card.subText.title} {'>>'}
							</h5>
							<div className="transition-all scale-y-0 origin-top max-h-0 duration-750 group-hover:scale-y-100 group-hover:max-h-100 group-active:scale-y-100 group-active:max-h-100 group-focus:scale-y-100 group-focus:max-h-100">
								<RecursiveContent
									data={card.subText.content.content}
									level={0}
									classKey="priceCardSubText"
								/>
							</div>
						</>
					)}
				</div>
			</Card.Body>
		</Card>
	)
}
