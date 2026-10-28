'use client'

import Image from 'next/image'

import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'
import type { INTRO_SECTION_CONTENT } from './constants/constants'

import { MobileAdvert } from './MobileAdvert'

type IntroSectionProps = {
	data: typeof INTRO_SECTION_CONTENT
}

export const IntroSection = ({ data }: IntroSectionProps) => {
	const { id, header, image, textContent } = data

	const isMobile = useBreakpointChecker()

	return (
		<section
			id={id}
			className={`bg-white text-black w-full flex flex-col-reverse items-center justify-center gap-10 p-28 pl-5 pr-5 sm:p-[13.07%] xl:flex xl:flex-row xl:gap-[3.5%] xl:items-start xl:p-35 xl:pl-[11%] xl:pr-[6%] 2xl:p-35 2xl:pl-[15%] 2xl:pr-[10%] 2xl:gap-[4%]`}
		>
			{isMobile && <MobileAdvert />}
			<div className="w-full min-w-42.5 xl:basis-[59.4%] 2xl:basis-[58%] relative group">
				<RotatableImage alt={image.alt} src={image.src} className="lg:w-full" />
				<p className="absolute text-nowrap text-[95%] -bottom left-1/2 transform -translate-x-1/2 z-0 opacity-100 cursor-default select-none xl:transition-opacity xl:duration-600 xl:translate-x-0 xl:group-hover:opacity-100 xl:group-focus:opacity-100 text-sm xl:opacity-0 xl:bottom-0 xl:left-auto xl:right-0">
					<span className="text-green-700 text-[87%] font-bold">✓</span>
					{image.caption}
				</p>
			</div>
			<div className="text-[95%] flex flex-col text-center gap-3 lg:gap-1 font-bold font-montserrat  xl:text-left  xl:basis-[44%] 2xl:basis-[41%] lg:leading-13 xl:leading-14.75 2xl:leading-16.5">
				<div className="text-[220%] xl:text-[270%] 2xl:text-[300%]">
					<h2 className="text-section-heading-highlight m-0">{header.title}</h2>
					<h2 className="font-white">{header.subTitle}</h2>
				</div>
				<p className="classes-heading-text">{textContent.text}</p>
				<Image
					alt={textContent.image.alt}
					src={textContent.image.src}
					className="object-cover hidden xl:block xl:w-[52.85%] 2xl:w-[58.95%]"
				/>
			</div>
		</section>
	)
}
