import type { StaticImageData } from 'next/image'

import type { DocType } from '@/types'

import Image6 from '../Assets/classroom2.webp'
import Image3 from '../Assets/fendi.webp'
import Image5 from '../Assets/gyaki.webp'
import Image4 from '../Assets/gyaki2.webp'
import Image1 from '../Assets/kp1_t.png'
import Image2 from '../Assets/kp2_t.png'

type POSSIBILITIES_INFO_TYPE = {
	image: {
		alt: string
		caption: string
		src: StaticImageData
	}
	link: {
		href: string | null
		text: string
	}
	subTitle: {
		emoticon: string
		text: string
	}
	text: DocType
	title: string | null
}

export const POSSIBILITIES_INFO: POSSIBILITIES_INFO_TYPE[] = [
	{
		title: 'folyamatok',
		subTitle: {
			emoticon: '✓',
			text: 'kezdőkkel'
		},
		image: {
			src: Image4,
			alt: '',
			caption: 'Tanulás elektromoson vagy akusztikuson'
		},
		text: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '... egy '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'általános alapozás'
						},
						{
							type: 'text',
							text:
								' közben máris zenélve tanulhatsz: a különböző alapgyakorlatok ill. ízlés szerint válogatott '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'egyszerűbb dalok'
						},
						{
							type: 'text',
							text: ' magukban foglalják a modern könnyűzene alapvető elemeit, fogásait is...'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Az órák teljesen dalközpontúak, hiszen a hobbi-zenélésben a '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'sikerélmény és a zenélés örömei'
						},
						{
							type: 'text',
							text:
								' a legfontosabbak. Ezzel párhuzamosan az elmélet alapjait is érinthetjük, velősen, lényegre törően, hogy ne teherré, hanem hasznos segédünkké váljon.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Kezdetben a hangszer alapos megismerése és megszeretése a lényeg. Hogy örömmel ülj le gitározni, hogy láss összefüggéseket, hogy önállósodj. A tanulás menetét, folyamatát igényeid szerint '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'aktívan alakíthatod'
						},
						{
							type: 'text',
							text: ' - én ebben leszek a partnered.'
						},
						{ type: 'hardBreak' },
						{
							type: 'text',
							text: 'Akár az otthoni zeneszerkesztés- és felvétel praktikáit is érinthetjük...'
						}
					]
				}
			]
		},
		link: {
			text: 'tanácsok kezdőknek',
			href: null
		}
	},
	{
		title: null,
		subTitle: {
			emoticon: '✓',
			text: 'haladókkal'
		},
		image: {
			src: Image5,
			alt: '',
			caption: 'egy kis gyakorlás sosem árthat :)'
		},
		text: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '... amolyan műhelymunka-szerűen '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'különböző karakterű darabokkal'
						},
						{
							type: 'text',
							text:
								' foglalkozhatunk. A komolyabb témákon keresztül fejlődhet a technikád, mindset-ed, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'játékod zeneisége'
						},
						{
							type: 'text',
							text:
								' és kreativitásod, egyéniséged is; könnyebben ráláthatsz összefüggésekre, vagy épp az együtt-zenélés bizonyos elemeire (kinek mire van szüksége)...'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'A fenti gyakorlások mellett a megértés is fontos elem - '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'gyakorlatban alkalmazni az elméletet'
						},
						{
							type: 'text',
							text:
								', belelátni különféle stílusokba, megközelítésekbe, ill. az improvizálás és zeneírás eszközeinek elméleti és gyakorlati lehetőségeibe - ízlés szerint. Nem "csak" gitározni tanulunk, hanem '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'zenélni'
						},
						{
							type: 'text',
							text: ' is; megismerhetünk gondolkodásmódokat, tágíthatjuk a látókört...'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'A folyamatos, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'személyes kontakt'
						},
						{
							type: 'text',
							text:
								' szintén nagyon hasznos: bármilyen kérdést, ill. felmerülő problémás részt megoldhatunk, átbeszélhetünk közösen.'
						}
					]
				}
			]
		},
		link: {
			text: 'gitároktatás-videók',
			href: './videos'
		}
	},
	{
		title: 'stílusok',
		subTitle: {
			emoticon: '✓',
			text: 'sokszínűség'
		},
		image: {
			src: Image6,
			alt: 'klásszrúm - a gitárorákulum-hely :)',
			caption: 'klásszrúm - a gitárorákulum-hely :)'
		},
		text: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'... a klasszikus slágerektől- a jazz-en, blues-on, funky-n át -a modern pop/rock/metálzenéig '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'sok minden teret kaphat'
						},
						{
							type: 'text',
							text:
								' - mindez rugalmasan az ízlésedhez, igényeidhez igazítva: legyen akár teljes dal, egy téma, egy szóló, vagy épp egy-egy hasznos, fejlesztő '
						},
						{
							type: 'text',
							marks: [{ type: 'italic' }, { type: 'underline' }],
							text: 'stílusgyakorlat'
						},
						{
							type: 'text',
							text: ' a könnyűzene különféle stíluságaiból.. Így egy igen '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'színes és élvezetes'
						},
						{
							type: 'text',
							text:
								', de ezzel együtt komoly repertoárból csemegézhetünk -elképzeléseidet szem előtt tartva.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Kedvenc, hozott dalokat ugyanúgy tanulunk, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'nincs zeneiskolai kötöttség'
						},
						{
							type: 'text',
							text:
								'. Nem szokásom erőltetni az unalmas, öncélú, dallamtalan technikai gyakorlatokat sem, az igazi zenéléshez amúgy sem ez a megfelelő út.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Akusztikus- és elektromosgitáron egyaránt'
						},
						{
							type: 'text',
							text: ' zenélhetünk, szívesen és nagy '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'türelemmel'
						},
						{
							type: 'text',
							text:
								' foglalkozom teljesen kezdőkkel és haladókkal is. Az órák egyéniek, nem csoportosak, és teljesen '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'személyre szabottak'
						},
						{
							type: 'text',
							text: ' (az aktuális szinthez, szorgalomhoz, saját céljaidhoz igazodnak).'
						}
					]
				}
			]
		},
		link: {
			text: 'studio-képek',
			href: './about/classroom'
		}
	}
]

export const POSSIBILITIES_CONTENT = {
	id: 'possibilities',
	header: {
		title: 'irányok és lehetőségek',
		subTitle: 'gyakorlat-központúság'
	},
	content: {
		body: [
			{
				id: 'pos-content-body-1',
				text:
					'Könnyűzenei gitároktatás, mely bárki számára elérhető - megfizethető, emberi áron. Egyéni órák, személyes kontakt, jó élmények, klassz dalok, sok gitározás! :) \n Szeretettel várlak, ha',
				images: [
					{ src: Image1, alt: 'közérthető, rugalmas' },
					{ src: Image2, alt: 'gyakorlatközpontú' }
				]
			},
			{
				id: 'pos-content-body-2',
				text:
					'és egyénileg alakítható órákon szeretnél részt venni - akár egy szuper hobbinak tekinted a gitározást, akár csak kipróbálnád magad benne.'
			},
			{
				id: 'pos-content-body-3',
				text:
					'A zenetanulás kitartást és rugalmasságot kíván, így várhatunk hatékony és folyamatos fejlődést. Közös munkával, könnyed úton haladunk saját céljaid irányába, elkerülvén rossz technikákat, irányokat és felesleges köröket.\nMai zenei palettánk -és a zene iránt érdeklődők ízlése- annyira sokrétű, hogy nem szorítkozhatunk kötött tanmenetekre, konkrét stílusokra. Egy jó gitáros ma már sok mindenből, sokféleképpen tanulhat és meríthet, így kaphat átfogó képet a gitározás irányairól.',
				images: { src: Image3, alt: 'kép egy akusztikus hangszerről' }
			},
			{
				id: 'pos-content-body-4',
				text:
					'A gitározás sok örömet és színvonalas élményt nyújt, ami egyben egy remek hobbi is. Ahogyan az első akkordoktól eljutunk az első dalokig - az első daloktól az egyre komolyabb témákig - mind-mind egy szép folyamat részei. A zenélés gazdagít, vagy épp felszabadít, szórakoztat és elmélyít.'
			},
			{
				id: 'pos-content-body-5',
				header: '... miben más?',
				emoticon: '💡',
				text:
					'A tanításban (is) a dallamos, zenei, kifejező játékot és felfogást részesítem előnyben: az ízeket, a dalközpontúságot, a harmóniai gondolkodást, a komplett zenei egységet - a mai fúziós/technokrata lick-gitározás trendjei helyett.'
			}
		],
		quote: {
			text:
				'A hangok, az akkordok második nyelvvé váltak a számomra, és gyakran megesik, hogy ennek a nyelvnek a szókészletével fejezem ki az érzéseimet akkor, amikor a hétköznapi beszéddel kudarcot vallok.',
			author: 'Slash'
		}
	},
	info: POSSIBILITIES_INFO
}

export type PossibilitiesBodyType = (typeof POSSIBILITIES_CONTENT)['content']['body']
export type PossibilitiesDetailsType = (typeof POSSIBILITIES_CONTENT)['info']
