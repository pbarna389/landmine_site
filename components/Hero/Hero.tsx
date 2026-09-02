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
	const { idx, nextIdx, loaded, setLoaded, changeCurrentSlide } = useCarousel(
		HERO_DATA.length,
		BASE_BASE_ANIM_TIMEOUT,
		BASE_TIMEOUT
	)

	const selectedData = HERO_DATA[idx]

	return (
		<div className="w-full h-full">
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
			<div className="absolute z-1 bottom-5 -translate-x-1/2 left-1/2 flex items-center justify-center gap-10">
				{HERO_DATA.map((element, carIdx) => (
					<span
						key={`selector-id-${element.id}`}
						className={`h-5 w-5 rounded-full opacity-80 outline-0 outline-carousel bg-white cursor-pointer relative transition-all duration-250 hover:opacity-100 hover:brightness-105  after:absolute after:-translate-1/2 after:top-1/2 after:left-1/2 after:z-2 after:bg-carousel/75 after:rounded-full after:transition-all after:content-[''] after:w-1 after:h-1 after:duration-750 ${idx === carIdx ? 'after:w-9/10 after:duration-7500 after:h-9/10' : ''} ${nextIdx === carIdx ? 'outline-2' : ''}`}
						onClick={() => changeCurrentSlide(carIdx)}
					/>
				))}
			</div>
		</div>
	)
}
