import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { HeroCarouselList } from './HeroCarouselList'
import { HeroCarouselMainText } from './HeroCarouselMainText'
import { HeroCarouselTextParent } from './HeroCarouselTextParent'
import { HeroLinks } from './HeroLinks'
import type { HERO_DATA_TYPE } from '../../constants/constants'

type HeroCarouselContentProps = {
	img: StaticImageData
	links: HERO_DATA_TYPE['links']
	mainText: string[]
	subText: string[]
	idx?: number
	loadState?: boolean
	setLoaded?: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeroCarouselContent = ({
	loadState,
	idx,
	img,
	mainText,
	subText,
	links,
	setLoaded
}: HeroCarouselContentProps) => {
	const validIdx = idx ?? 'invalid index of element'
	const validLoadState = loadState ?? false

	return (
		<div
			className={`w-full h-screen relative z-1 transition-all duration-500 shadow-2xl ${loadState ? 'opacity-100' : 'opacity-0'}`}
		>
			<Image
				className="fill object-cover h-full w-full overflow-clip"
				src={img}
				key={`hero-image-${img.src}`}
				alt={`Hero Image ${validIdx}`}
				priority
				onLoad={() => (setLoaded ? setLoaded(true) : undefined)}
				onError={() => (setLoaded ? setLoaded(true) : undefined)}
			/>
			<HeroCarouselTextParent loadState={validLoadState} position="top">
				<HeroCarouselMainText mainText={mainText} />
			</HeroCarouselTextParent>
			<HeroCarouselTextParent loadState={validLoadState} position="middle">
				<HeroCarouselList subText={subText} />
			</HeroCarouselTextParent>
			<HeroLinks position="end" links={links} loadState={validLoadState} />
		</div>
	)
}
