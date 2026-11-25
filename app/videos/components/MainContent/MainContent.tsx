import type { StaticImageData } from 'next/image'

import type { DocType } from '@/types'

import { VideoCategoryCard } from './VideoCategoryCard'
import { VideoHeader } from './VideoHeader'

type MainContentProps = {
	subPages: {
		href: string
		id: number
		image: {
			alt: string
			src: StaticImageData
		}
		text: string
		title: string
	}[]
	textContent: DocType
	title: {
		subtext: string
		text: string
	}
}

export const MainContent = async ({ title, textContent, subPages }: MainContentProps) => {
	return (
		<>
			<VideoHeader title={title} textContent={textContent} />
			<nav className="flex flex-col justify-center items-center gap-10 lg:gap-5 lg:items-stretch lg:justify-between lg:flex-row lg:flex-wrap">
				{subPages.map((card, idx) => (
					<VideoCategoryCard key={`video-category-card-${card.id}`} card={card} idx={idx} />
				))}
			</nav>
		</>
	)
}
