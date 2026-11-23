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
		<ul
			className={`flex gap-5 absolute z-5 text-center font-montserrat font-bold transition-all ${elementPos.duration} transform -translate-1/2 sm:leading-13 md:translate-0 md:text-left ${loadState ? elementPos.end : elementPos.start}`}
		>
			{links.map((link, idx) => (
				<Link
					key={link.id}
					className={`transition-colors duration-400 w-fit uppercase cursor-pointer rounded-[3px] text-[14.4px] tracking-[2px] border-2 ${idx % 2 === 0 ? 'text-white border-[rgba(174,146,85,1)] bg-[rgba(174,146,85,1)] hover:bg-[rgba(174,146,85,.15)] hover:text-[#E3D8BF]' : 'border-white/86 bg-white/86 text-footer-text hover:border-white hover:bg-white'} p-1 pl-7.5 pr-7.5 `}
					href={link.href}
				>
					{link.text}
				</Link>
			))}
		</ul>
	)
}
