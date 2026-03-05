'use client'

import Image from 'next/image'

import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'
import { INTRO_SECTION_CONTENT } from './constants/constants'

import { MobileAdvert } from './MobileAdvert'

export const IntroSection = () => {
	const { header, image, textContent } = INTRO_SECTION_CONTENT

	const isMobile = useBreakpointChecker()

	return (
		<section
			className={`bg-white text-black w-full flex flex-col-reverse items-center justify-center p-8 lg:flex lg:flex-row lg:gap-10 lg:items-start lg:p-35 lg:pt-28 lg:pb-28`}
		>
			{isMobile && <MobileAdvert />}
			<div className="basis-28/30 relative group">
				<RotatableImage
					alt={image.alt}
					src={image.src}
					className="pt-1.5 max-w-[calc(100vw*0.8)] min-w-42.5 lg:w-full"
				/>
				<p className="absolute text-nowrap -bottom-5 left-1/2 transform -translate-x-1/2 z-0 opacity-100 cursor-default select-none lg:transition-opacity lg:duration-600 lg:translate-x-0 lg:group-hover:opacity-100 lg:group-focus:opacity-100 text-sm lg:opacity-0 lg:bottom-0 lg:left-auto lg:right-0">
					<span className="text-green-700 font-bold">✓</span>
					{image.caption}
				</p>
			</div>
			<div className="space-y-3 lg:space-y-1 font-bold font-montserrat leading-6 lg:leading-12 text-center lg:text-left">
				<div className="text-[28px] lg:text-[49px]">
					<h2 className="text-section-heading-highlight m-0">{header.title}</h2>
					<h2 className="font-white">{header.subTitle}</h2>
				</div>
				<p className="text-[18px] font-normal">{textContent.text}</p>
				<Image
					alt={textContent.image.alt}
					src={textContent.image.src}
					className="object-cover w-[63%] hidden lg:block"
				/>
			</div>
		</section>
	)
}
