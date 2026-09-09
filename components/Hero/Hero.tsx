'use client'

import {
	HeroCarouselContent,
	HeroCarouselSelector,
	HeroCarouselWrapper
} from './components'
import { HERO_DATA } from './constants/constants'
import { BASE_BASE_ANIM_TIMEOUT, BASE_TIMEOUT } from '@/constants/constants'

import { CarouselWrapper } from '../CarouselWrapper'

export default function Hero() {
	return (
		<div className="w-full h-full">
			<CarouselWrapper
				carouselData={HERO_DATA}
				components={{
					ParentComponent: { component: HeroCarouselWrapper },
					BaseComponent: HeroCarouselContent,
					SelectorComponent: HeroCarouselSelector
				}}
				timers={{
					animationTimeout: BASE_BASE_ANIM_TIMEOUT,
					intervalTimeout: BASE_TIMEOUT
				}}
				shouldHandleLoading={false}
			/>
		</div>
	)
}
