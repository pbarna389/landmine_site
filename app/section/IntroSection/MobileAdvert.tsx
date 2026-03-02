'use client'

import { useEffect } from 'react'

import { useCarousel } from '@/hooks/useCarousel'
import { INTRO_SECTION_CONTENT } from './constants/constants'
import { BASE_BASE_ANIM_TIMEOUT, BASE_TIMEOUT } from '@/constants/constants'

export const MobileAdvert = () => {
	const { mobileCarouselContent } = INTRO_SECTION_CONTENT

	const { idx, loaded, setLoaded } = useCarousel(
		mobileCarouselContent.length,
		BASE_BASE_ANIM_TIMEOUT,
		BASE_TIMEOUT
	)

	useEffect(() => {
		const timeout = setTimeout(() => setLoaded(true), 150)

		return () => clearTimeout(timeout)
	}, [setLoaded, idx])

	const currentElement = mobileCarouselContent[idx]

	return (
		<div className="flex flex-col gap-3 items-center justify-center mt-15 font-montserrat bg-intro-mobile-advert-bg border-t-section-heading-highlight border-t border-b-section-heading-highlight border-b w-[calc(100vw*0.8)] min-w-42.5 min-h-37.5">
			<div
				className={`space-y-4 text-center transition-opacity duration-750 ${loaded ? 'opacity-100' : 'opacity-0'}`}
				onLoad={() => setLoaded(true)}
			>
				<h2 className="uppercase text-lg">{currentElement.header}</h2>
				<div className="text-center">
					{currentElement.text.map((paragraph, pIndex) => (
						<p
							className="text-sm"
							key={`mobile-content-${idx}-mobile-advert-paragraph-${pIndex}`}
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}
