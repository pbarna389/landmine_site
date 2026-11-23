import Link from 'next/link'

import { POSITION_VARIANTS } from './constants/constants'

import type { HERO_LINKS } from '../../constants/constants'

type HeroLinksProps = {
	links: HERO_LINKS
	loadState: boolean
	position: 'top' | 'middle' | 'end'
}

export const HeroLinks = ({ links, position, loadState }: HeroLinksProps) => {
	const elementPos = POSITION_VARIANTS[position]

	return (
		<div
			inert={!loadState}
			className={`flex flex-wrap w-9/10 sm:w-[60%] md:w-fit gap-5 absolute z-5 text-center font-montserrat font-bold transition-all ${elementPos.duration} transform -translate-1/2 sm:leading-13 md:translate-0 md:text-left ${loadState ? elementPos.end : elementPos.start}`}
		>
			{links.map((link, idx) => (
				<Link
					key={link.id}
					className={`transition-colors p-3 pl-3.5 pr-3.5 duration-300 w-full uppercase cursor-pointer rounded-[3px] tracking-[2px] border-2 ${idx % 2 === 0 ? 'text-[#E3D8BF] bg-[rgba(174,146,85,.30)] border-[rgba(174,146,85,0.3)] hover:bg-[rgba(174,146,85,1)] hover:border-[rgba(174,146,85,1)] hover:text-white' : 'border-white/70 bg-white/70 text-footer-text hover:border-white hover:bg-white'} ${loadState ? 'cursor-pointer' : 'cursor-default'} sm:pl-5 sm:pr-5 md:w-fit md:text-[14.8778px]  md:pl-4.5 md:pr-4.5 lg:text-[13.1167px] lg:p-px lg:pl-3.75 lg:pr-3.75 2xl:text-[14.4px] 2xl:p-1 2xl:pl-7.5 2xl:pr-7.5`}
					href={link.href}
				>
					{link.text}
				</Link>
			))}
		</div>
	)
}
