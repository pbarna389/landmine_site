import Image from 'next/image'
import Link from 'next/link'

import { VIDEO_ADVERT_CONTENT } from './constants/constants'
import type { IconNames } from '@/types'

import { AdvertBtn } from './AdvertBtn'

type TypeAdvertLinks = {
	[key in IconNames]?: string
}

const VIDEO_ADVERT_LINK_STYLES: TypeAdvertLinks = {
	youtube:
		'bg-red-600 hover:bg-white hover:text-red-600 active:brightness-75 focus-within:bg-white focus-within:font-black',
	facebook:
		'bg-[#3B79D7] hover:brightness-80 active:brightness-70 focus-within:brightness-80',
	tiktok:
		'bg-black hover:bg-white hover:text-black active:brightness-75 focus-within:bg-white focus-within:font-black'
}

export const VideoAdvertSection = () => {
	const { title, image, links } = VIDEO_ADVERT_CONTENT

	return (
		<section className="flex flex-col gap-5 p-16 justify-center items-center bg-video-advert w-full *:text-white *:text-center *:font-montserrat">
			<h2 className="font-bold text-xl lg:text-[41px]">{title.text}</h2>
			<h3 className="font-light text-[24px] whitespace-pre-line">{title.subText}</h3>
			<Image className="w-full min-w-40 max-w-190" src={image.src} alt={image.alt} />
			<div className="flex flex-row flex-wrap items-center justify-center gap-5">
				{links.map((link) => (
					<Link className="w-full sm:w-auto" key={`advert-link-${link.site}`} href={link.href}>
						<AdvertBtn
							text={link.text}
							className={`w-full p-4 pl-3 pr-3 rounded uppercase transition-all duration-150 cursor-pointer text-[12px] sm:text-[14px] md:text-sm ${VIDEO_ADVERT_LINK_STYLES[`${link.site}`]}`}
						/>
					</Link>
				))}
			</div>
		</section>
	)
}
