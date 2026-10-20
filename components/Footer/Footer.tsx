'use client'

import Image from 'next/image'
import Link from 'next/link'

import { IconContext } from 'react-icons'

import { FOOTER_CONTENT } from './constants/constants'
import type { IconNames } from '@/types'

import { Icons } from '../Icons/Icons'

export default function Footer() {
	const { media, contact, info } = FOOTER_CONTENT

	return (
		<footer className="flex flex-col items-center justify-center w-full p-13 pr-0 pl-0 bg-section-header-background text-footer-text font-raleway space-y-10 lg:p-7 lg:pl-50 lg:pr-50 lg:flex-row lg:items-start lg:gap-20">
			<div className="basis-3/11 hidden text-left space-y-7.5 pt-5 h-full lg:block lg:text-left">
				<h3 className="text-[30px] uppercase">{media.content.title}</h3>
				<div className="space-y-5 text-[15px] text-justify">
					{media.content.text.map((text) => (
						<p key={`footer-media-text-${text}`}>{text}</p>
					))}
				</div>
				<div className="flex gap-1 justify-start items-center">
					{media.content.links.map((link) => (
						<Link
							className="w-8 h-8 transition flex items-center justify-center duration-300 hover:brightness-105 hover:scale-105	active:brightness-105 active:scale-105 focus:brightness-150 focus:scale-105 focus-within:brightness-105 focus-within:scale-105"
							key={`footer-link-${link.site}`}
							href={link.href}
							target="_blank"
						>
							<IconContext
								value={{ color: 'black', size: `${link.site === 'telephone' ? '35' : '40'}` }}
							>
								<Icons iconVars={link.site as IconNames} />
							</IconContext>
						</Link>
					))}
				</div>
			</div>
			<div className="basis-3/11 text-center space-y-10 h-full lg:text-left lg:space-y-7.5 lg:pt-5">
				<h3 className="text-[30px] uppercase">{contact.content.title}</h3>
				<div className="flex gap-1 justify-center items-center lg:hidden">
					{media.content.links.map((link) => (
						<Link
							className="w-8 h-8 transition flex items-center justify-center duration-300 hover:brightness-105 hover:scale-105	active:brightness-105 active:scale-105 focus:brightness-150 focus:scale-105 focus-within:brightness-105 focus-within:scale-105"
							key={`footer-link-${link.site}`}
							href={link.href}
							target="_blank"
						>
							<IconContext
								value={{ color: 'black', size: `${link.site === 'telephone' ? '35' : '40'}` }}
							>
								<Icons iconVars={link.site as IconNames} />
							</IconContext>
						</Link>
					))}
				</div>
				<h2 className="text-3xl font-bold">FORM WILL BE HERE</h2>
			</div>
			<div className="basis-3/11 flex flex-col w-fit justify-center items-center gap-10 lg:items-start lg:gap-7.5 lg:pt-5">
				<h3 className="text-[30px] uppercase hidden lg:block">{info.content.title}</h3>
				<div className="flex flex-col gap-10 justify-center items-center lg:flex-col-reverse lg:items-start lg:gap-5">
					<Link
						className="capitalize underline font-bold lg:text-[15px]"
						href={info.content.link.href ? info.content.link.href : ''}
						target="_blank"
					>
						{info.content.link.text}
					</Link>
					<div className="*:mr-4 font-bold *:lg:mr-1 *:lg:text-[15px] *:lg:font-normal">
						<span>{info.content.text[0]}</span>
						<span>{info.content.emoticon}</span>
						<span>{info.content.text[1]}</span>
					</div>
				</div>
				<Image
					className="hidden lg:block"
					src={info.content.image.src}
					alt={info.content.image.alt}
				/>
			</div>
		</footer>
	)
}
