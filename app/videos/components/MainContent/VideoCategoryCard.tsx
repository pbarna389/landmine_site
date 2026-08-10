import Image from 'next/image'
import Link from 'next/link'

import { Card, Heading } from '@/components'

import type { VideoSubPageType } from '../../constants/constants'

type VideoCategoryCardProps = { card: VideoSubPageType; idx: number }

export const VideoCategoryCard = ({ card, idx }: VideoCategoryCardProps) => {
	return (
		<Card
			key={`video-card-${card.id}`}
			className="pt-0 pr-0 pl-0 pb-0 min-w-9/10 rounded-lg overflow-hidden sm:min-w-3/10 lg:w-3/10 lg:min-h-fit"
		>
			<Link href={card.href} className="cursor-pointer">
				<Card.Header idx={idx} className="pt-0 pb-0">
					<Image
						className="w-full cursor-pointer"
						src={card.image.src}
						alt={card.image.alt}
						priority
					/>
				</Card.Header>
				<div className="w-full p-5 space-y-10 *:text-center *:lg:text-center">
					<Heading
						text={card.title}
						className="w-full capitalize sm:capitalize after:absolute after:-bottom-5 after:bg-section-heading-highlight lg:text-nowrap lg:after:left-1/2 lg:after:transform lg:after:-translate-x-1/2"
					/>
					<p className="text-[15px]">{card.text}</p>
				</div>
			</Link>
		</Card>
	)
}
