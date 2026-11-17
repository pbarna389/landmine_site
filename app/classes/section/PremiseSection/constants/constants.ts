import type { StaticImageData } from 'next/image'

import type { DocType } from '@/types'

import Image1 from '../Assets/experience.png'
import Image2 from '../Assets/flexibility.png'
import Image3 from '../Assets/pers_or_online.png'

type PremiseContentType = {
	image: { alt: string; src: StaticImageData }
	textContent: DocType
	title: { emoticon: string; text: string }
}

const PREMISE_TEXT_CONTENT: PremiseContentType[] = [
	{
		title: { text: 'tapasztalat', emoticon: '✓' },
		image: { src: Image1, alt: 'Tapasztalat' },
		textContent: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Immár 20 éves intenzív tanítási tapasztalattal, ill. Bp. egyik legkedvezőbb tandíjával várlak, jó hangulatú, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'minőségi órákra'
						},
						{
							type: 'text',
							text: '.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Dolgozzunk együtt, valósítsuk meg közösen a céljaidat!'
						}
					]
				}
			]
		}
	},
	{
		title: { text: 'rugalmasság', emoticon: '✓' },
		image: { src: Image2, alt: 'Rugalmasság' },
		textContent: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Gitároktatás kezdőknek, haladóknak - jelentkezés folyamatosan.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Tanulj személyre szabott, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'gyakorlat-központú'
						},
						{
							type: 'text',
							text: 'órákon!'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Nálam bármilyen stílusban tanulhatsz.'
						}
					]
				}
			]
		}
	},
	{
		title: { text: 'személyes vagy online', emoticon: '✓' },
		image: { src: Image3, alt: 'akár személyesen vagy online' },
		textContent: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Karanténos időkben, ill. a Budapesttől távol élőknek sem kell lemondani a gitározásról!'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'A tanulás online videochat formában is jól működik, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'facebook-messenger vagy skype'
						},
						{
							type: 'text',
							text: ' programokkal.'
						}
					]
				}
			]
		}
	}
]

export const PREMISE_CONTENT = {
	id: 'premise',
	header: {
		title: 'amire számíthatsz',
		subTitle: 'tapasztalat és rugalmasság'
	},
	content: PREMISE_TEXT_CONTENT
}
