import { MobileAdvertParent } from './components'
import { MobileAdvertText } from './components/MobileAdvertText/MobileAdvertText'
import { CarouselWrapper } from '@/components'
import { INTRO_SECTION_CONTENT } from './constants/constants'
import { BASE_BASE_ANIM_TIMEOUT, BASE_TIMEOUT } from '@/constants/constants'

export const MobileAdvert = () => {
	const { mobileCarouselContent } = INTRO_SECTION_CONTENT

	return (
		<div className="flex flex-col gap-3 items-center justify-center mt-15 font-montserrat bg-intro-mobile-advert-bg border-t-section-heading-highlight border-t border-b-section-heading-highlight border-b w-[calc(100vw*0.8)] min-w-42.5 min-h-37.5">
			<CarouselWrapper
				carouselData={mobileCarouselContent}
				components={{
					ParentComponent: { component: MobileAdvertParent },
					BaseComponent: MobileAdvertText
				}}
				timers={{
					animationTimeout: BASE_BASE_ANIM_TIMEOUT,
					intervalTimeout: BASE_TIMEOUT
				}}
			/>
		</div>
	)
}
