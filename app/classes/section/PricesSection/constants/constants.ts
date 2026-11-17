import type { StaticImageData } from 'next/image'

import type { DocType } from '@/types'

import Image1 from '../Assets/p1.png'
import Image2 from '../Assets/p2.png'
import Image3 from '../Assets/p3.png'

const PRICES_TEXT_CONTENT: {
	image: { alt: string; src: StaticImageData }
	subText: {
		content: DocType
		link: string | null
		link_text: string | null
		title: string
	} | null
	textContent: DocType
	title: { emoticon: string | null; text: string }
}[] = [
	{
		title: { text: 'helyszín', emoticon: null },
		image: { src: Image1, alt: 'Helyszín' },
		subText: {
			title: 'info és térkép',
			content: {
				type: 'doc',
				content: [
					{
						type: 'bulletList',
						content: [
							{
								type: 'listItem',
								content: [
									{
										type: 'paragraph',
										content: [
											{
												type: 'text',
												text:
													'Közel a nagy csomópontokhoz: BAH, Széll Kálmán/Déli, Újbuda, stb., de a belváros is 10-15 perc alatt elérhető.'
											}
										]
									}
								]
							},
							{
								type: 'listItem',
								content: [
									{
										type: 'paragraph',
										content: [
											{
												type: 'text',
												text:
													'BKV: 8E busz 2 percre (Ferenciek tere-BAH-Kelenföld vonalon), 59-es villamos (Széll K. felől) pár perc.'
											}
										]
									}
								]
							},
							{
								type: 'listItem',
								content: [
									{
										type: 'paragraph',
										content: [
											{
												type: 'text',
												text: 'Autóval a Hegyalja út felől. Ingyenes parkolási zóna!'
											}
										]
									}
								]
							}
						]
					}
				]
			},
			link: 'http://fos.hu/104l',
			link_text: 'térkép'
		},
		textContent: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '✅ A gitárórák helyszíne '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Budapest zöld szívében'
						},
						{
							type: 'text',
							text: ' könnyen és gyorsan megközelíthető, barátságos helyen.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: '✅ Időpontok bármikor:'
						},
						{
							type: 'text',
							text: ' reggel, napközben vagy este.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'A gitárórák - szabad helytől függően - bármikor elkezdhetők, online is!'
						}
					]
				}
			]
		}
	},
	{
		title: { text: 'tandíj', emoticon: null },
		image: { src: Image2, alt: 'Tandíj' },
		subText: {
			title: 'bővebben',
			content: {
				type: 'doc',
				content: [
					{
						type: 'paragraph',
						content: [
							{
								type: 'text',
								text: 'A tandíj havidíjas rendszerben működik, s '
							},
							{
								type: 'text',
								marks: [{ type: 'bold' }],
								text: 'nem óradíjas'
							},
							{
								type: 'text',
								text:
									'. Minden hónapban fix összeg (akárcsak egy bérlet esetén), mely kizárólag az adott hónapra érvényes. Az elmaradt alkalmak nem kerülnek visszatérítésre. Saját időpontot tartok fent mindenkinek - ez a havidíj alapja.'
							},
							{
								type: 'hardBreak'
							},
							{
								type: 'text',
								text:
									'Lemondott órák pótlására legfeljebb havi 1 alkalommal van lehetőség, eseti, megüresedő időpontban. (Általam lemondott órák, karácsony természetesen nem kerülnek felszámításra.)'
							},
							{
								type: 'hardBreak'
							},
							{
								type: 'text',
								text: 'Az ár így kedvezőbb a minél rendszeresebben járóknak, és jóval az '
							},
							{
								type: 'text',
								marks: [{ type: 'bold' }],
								text: 'átlag-tarifa'
							},
							{
								type: 'text',
								text: ' (8-10e/óra) '
							},
							{
								type: 'text',
								text: 'alatt marad.'
							}
						]
					}
				]
			},
			link: null,
			link_text: null
		},
		textContent: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: '✅ A havidíj fix 18.000 ft'
						},
						{
							type: 'text',
							text: ', lejárt óráktól függetlenül. Befizetés: hónap elején.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '✅ Heti 1 alkalom'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: '5 hetes hónap esetén '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'az ötödik órát ajándékba adom!'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '✅ Az órákra saját hangszert, füzetet hozni kell.'
						}
					]
				}
			]
		}
	},
	{
		title: { text: 'ingyenes első óra', emoticon: null },
		image: { src: Image3, alt: 'Ingyenes első óra' },
		subText: null,
		textContent: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '✅ Az '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'első óra ingyenes'
						},
						{
							type: 'text',
							text:
								'; egy rövid szintfelmérésből áll, valamint megbeszéljük a terveket, célokat, igényeket.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'✅ Tabokat/kottákat, videókat, elméleti részt, mp3-as alapokat és egyéb gitároktatás - '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'segédanyagot minden órára biztosítok.'
						}
					]
				}
			]
		}
	}
]

export const PRICES_CONTENT = {
	id: 'prices',
	header: {
		title: 'helyszín és árak',
		subTitle: ''
	},
	content: PRICES_TEXT_CONTENT
}
