'use client'

import Image from 'next/image'

import { useEffect } from 'react'

import { useCarousel } from '@/hooks/useCarousel'
import { CLASSROOM_CONTENT } from './constants/constants'

export default function Home() {
	const { title, content, carouselTimeouts } = CLASSROOM_CONTENT

	const { idx, loaded, setLoaded } = useCarousel(
		content.images.length,
		carouselTimeouts.changeTimeout,
		carouselTimeouts.intervalTimeout
	)

	const currentImage = content.images[idx]

	useEffect(() => {
		const timeout = setTimeout(() => setLoaded(true), 150)

		return () => clearTimeout(timeout)
	}, [setLoaded, idx])

	return (
		<main className="flex flex-col justify-center items-center p-28 pl-5 pr-5 w-full gap-5 bg-white font-sans text-black sm:pl-15 sm:pr-15 md:pl-20 md:pr-20 lg:pr-41 lg:pl-41 *:font-montserrat">
			<h1 className="text-3xl capitalize text-center font-bold basis-3/4 relative sm:text-4xl md:text-5xl lg:text-[58px]">
				{title.text}
			</h1>
			<p className="whitespace-pre-wrap text-center mb-5 text-[18px]">
				{content.textContent.text}
			</p>
			<div
				className={`space-y-4 text-center transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
			>
				<div className="w-full">
					<Image
						className="rounded"
						height={400}
						src={currentImage.src}
						alt={currentImage.alt}
					/>
				</div>
			</div>
		</main>
	)
}
