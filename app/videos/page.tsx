import Image from 'next/image'
import Link from 'next/link'

import { Card, Heading } from '@/components'
import { VIDEOS_CONTENT } from './constants/constants'

import { VideoAdvertSection, VideoMainSection } from './sections'

export default function VideosPage() {
	const { title, textContent, subPages } = VIDEOS_CONTENT

	return (
		<main className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-raleway *:text-black">
			<VideoMainSection>
				<div className="flex w-full justify-center items-center md:justify-end md:basis-1/2">
					<div className="flex flex-col gap-10 lg:w-1/2 *:text-center *:lg:text-start">
						<Heading
							text={title.text}
							className="text-[48px] sm:text-[48px] md:text-[48px] lg:text-[62px] text-white capitalize lg:text-black"
						/>
						<h2 className="text-2xl text-white capitalize lg:text-black">{title.subtext}</h2>
						<article>{textContent.text}</article>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-5 md:flex-row md:flex-wrap">
					{subPages.map((card) => (
						<Card
							key={`video-card-${card.id}`}
							className="pt-0 pr-0 pl-0 pb-0 min-w-9/10 rounded-lg overflow-hidden sm:min-w-3/10 lg:w-3/10 lg:min-h-fit"
						>
							<Link href={card.href} target="_blank">
								<Image className="w-full" src={card.image.src} alt={card.image.alt} priority />
								<div className="w-full p-5 space-y-10 *:text-center *:lg:text-center">
									<Heading
										text={card.title}
										className="w-full capitalize sm:capitalize after:absolute after:-bottom-5 after:bg-section-heading-highlight lg:text-nowrap lg:after:left-1/2 lg:after:transform lg:after:-translate-x-1/2"
									/>
									<p className="text-[15px]">{card.text}</p>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</VideoMainSection>
			<VideoAdvertSection />
		</main>
	)
}
