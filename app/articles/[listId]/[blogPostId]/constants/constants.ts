import Picture02 from '../../assets/gyakterv.jpg'
import Picture01 from '../assets/vlog47.jpg'
import type { BlogPostModalType } from '../types'

// TODO: clickable image representation

export const BLOGPOST_MODAL_CONTENT: BlogPostModalType[] = [
	{
		id: 2,
		content: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Még ha csak hobbiként tekintünk is a zenélésre, akkor is fontos a folyamatos fejlődés, egy-egy új elem beépítése, ill. a látókörünk szélesítése.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ha csak a már unalomig játszott kedvenc dalainkat pengetjük, ill. a már kezünkből könnyedén kiguruló figurákkal imprózunk, hamar elunhatjuk a dolgot. Szóval az új inspiráció mindig nagyon fontos, hiszen ez segíthet lendületben tartani.'
						}
					]
				},
				{
					type: 'image',
					attrs: {
						src: Picture02.src,
						alt: 'gyakterv kép',
						title: 'A gyakorlás hasznos - csak tudjuk, hogyan kell'
					}
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [{ type: 'text', text: 'A gyakorlás területei' }]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A zenével foglalkozás bármilyen területe hasznos; a lényeg a folyamatosság. Ám mindenkinél vannak dolgok, amik alapból nehezebben mennek és ezeket hajlamosak vagyunk mellőzni - ami ahhoz vezethet, hogy bizonyos területek, készségek elsatnyulnak, vagy ki sem fejlődnek.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ez mindenkinél más és más... valaki a zeneelméletet hanyagolja, más az improvizálást, szólóírást, akkordozást; de sokan kihagyják pl. a dalok tanulását, a figurák beépítését, a technika fejlesztését, stb.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Egy-egy gyakorlós időszak természetesen folyamatosan változhat, mikor mire helyezünk hangsúlyt, több figyelmet..'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: '➠ Egy jó gyakorlásnak optimálisan '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'többféle elemet'
						},
						{
							type: 'text',
							text: ' kell(ene) magában foglalnia. Ilyenek pl:'
						}
					]
				},
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
											text: 'skálázás, akkordkötések'
										}
									]
								}
							]
						},
						{
							type: 'listItem',
							content: [
								{
									type: 'bulletList',
									content: [
										{
											type: 'listItem',
											content: [{ type: 'paragraph', content: [{ type: 'text', text: 'TESZT' }] }]
										}
									]
								},
								{
									type: 'paragraph',
									content: [
										{
											type: 'text',
											text: 'technika fejlesztése'
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
											text: 'zeneelmélet és hallásfejlesztés'
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
											text: 'dalok tanulása, elemzése'
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
											text: 'improvizálás/szólóírás'
										}
									]
								}
							]
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A skálázás nem csak le-fel rohangászást jelent egy ujjrenden, sokkal több lehetőséget rejt magában. Figurák, szekvenciák, hangsúlyok gyakorlása, ujjrendek egymásba fűzése, stb.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A zeneelmélet sem merülhet ki az alapelvek megértésében - ezt gyakorlatba kell ágyazni, használni (akkordkötések, elemzések, zenei mozgások, impro, stb.), mert csakis így tudnak elmélyülni, beivódni az összefüggések.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A dalok tanulásában is jóval több potenciál rejlik, mint pusztán a témák eljátszásában.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'A cikk végén, a videóban '
						},
						{
							type: 'text',
							text: 'ezeket is kifejtem'
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [{ type: 'text', text: 'Hogyan készítsünk tervet?' }]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Gyakorlás alatt konkrétan egy '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'koncentráltabb folyamatot'
						},
						{
							type: 'text',
							text: ' értek, ahol mindig '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'beépítünk'
						},
						{
							type: 'text',
							text:
								' valami -számunkra- újat. Tehát ez az örömzenélésnek egyfajta ellentéte. Mindkettő egyformán hasznos és fontos, csak másfajta aspektusból.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'A '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'gyakorlási terv'
						},
						{
							type: 'text',
							text:
								' megkönnyítheti, hogy ne maradjanak el bizonyos területek. A cél nem egy rendszer erőszakos követése, hanem inkább egy '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'támpont, egy segítség'
						},
						{
							type: 'text',
							text: '.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A kialakítás függhet attól, milyen területen mozgunk, mik vannak elmaradva - és persze, hogy mennyi időnk van egy héten.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ha csak heti egy alkalmat tudunk rászánni, akkor elég lehet egy-egy területre is fókuszálni; viszont heti 2-3 napnál már érdemes lehet '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'felosztani...'
						},
						{
							type: 'text',
							text:
								' A videóban arról (is) beszélek, hogyan osztanám fel heti 1-2-3 nap esetén, hogyan csoportosítanám az egyes területeket.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'(Természetesen ezek csak kiindulópontok, amiket mindenki egyénileg továbbgondolhat, átalakíthat)'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'➠ A rendszeres koncentrált gyakorlás, ha igazán hasznos és jól felépített, folyamatos fejlődést és lendületet tud adni, amiből az örömzenélés valóban táplálkozni tud!'
						}
					]
				},
				{
					type: 'image',
					attrs: {
						src: Picture01.src,
						alt: 'Gyakorlás videó',
						title: 'Youtube videó - landmine-gitar csatorna'
					}
				}
			]
		}
	}
]
