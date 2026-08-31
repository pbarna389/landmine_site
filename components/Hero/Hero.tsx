'use client'

import Image from 'next/image'

import {
	HeroCarouselList,
	HeroCarouselMainText,
	HeroCarouselTextParent
} from './components'
import { useCarousel } from '@/hooks/useCarousel'
import { HERO_DATA } from './constants/constants'
import { BASE_BASE_ANIM_TIMEOUT, BASE_TIMEOUT } from '@/constants/constants'

export default function Hero() {
	const { idx, loaded, setLoaded } = useCarousel(
		HERO_DATA.length,
		BASE_BASE_ANIM_TIMEOUT,
		BASE_TIMEOUT
	)

	const selectedData = HERO_DATA[idx]

	return (
		<div
			className={`w-full h-screen relative z-1 transition-all duration-500 shadow-2xl ${loaded ? 'opacity-100' : 'opacity-0'}`}
		>
			<Image
				className="fill object-cover h-full w-full overflow-clip"
				src={selectedData.img}
				key={`hero-image-${selectedData.img}`}
				alt={`Hero Image ${idx}`}
				priority
				onLoad={() => setLoaded(true)}
				onError={() => setLoaded(true)}
			/>
			<HeroCarouselTextParent loadState={loaded} position="top">
				<HeroCarouselMainText mainText={selectedData.mainText} />
			</HeroCarouselTextParent>
			<HeroCarouselTextParent loadState={loaded} position="middle">
				<HeroCarouselList subText={selectedData.subText} />
			</HeroCarouselTextParent>
		</div>
	)
}
