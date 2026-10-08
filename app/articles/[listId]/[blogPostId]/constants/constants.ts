import Picture06 from '../../assets/alice3.jpg'
import Picture03 from '../../assets/fules.jpg'
import Picture02 from '../../assets/gyakterv.jpg'
import Picture05 from '../assets/alice2.jpg'
import Picture01 from '../assets/vlog47.jpg'
import Picture04 from '../assets/vlog54.jpg'
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
	},
	{
		id: 4,
		content: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Biztosak lehetünk abban, hogy kedvenceink, a nagy zenészek sok időt töltöttek kedvenc zenéik lefülelésével. Már csak azért is, mert 2-3 évtizede még nem voltak tabok, videók, amiből tanulhattak volna...'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Persze ma már a modern technikák (AI, lassítás, stb) levehetik vállunkról az efféle "terheket" - de ez nem biztos, hogy minden szempontból előnyös.. a munkának, a "küzdésnek" megvannak a jutalmai: pl. a jó zenei hallás, mely a zenélés minden területére kihat!'
						}
					]
				},
				{
					type: 'image',
					attrs: { src: Picture03.src, alt: 'Régi magnó', title: 'A hallásfejlesztés örömei' }
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [{ type: 'text', text: 'Miért előny a jó zenei hallás?' }]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Egyrészt ha pl. nem találunk tabot, anyagot valamihez, azt is meg tudjuk fejteni, tanulni. Nem kényszerülünk AI használatára, ami lehet ugyan, hogy nagyjából megfejti nekünk (bár még mindig sokat téved), de a játszhatóság mindig kérdéses és problémás lehet (fekvések, ujjrendek..). Ráadásul a mechanikus betanulás nem fejleszti a zenei összefüggések átlátását, a beépítést, a készségeket...'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Másrészt ha a zenei hallásunk satnya, nem fognak tudni felbukkanni fejünkben jó ötletek - vagy ha mégis, nem fogjuk tudni ezt a hangszerünkön intepretálni, hiszen nem alakult ki egy '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'nagyon fontos kapcsolat a belső hallásunk és a kezünk között.'
						},
						{
							type: 'text',
							text:
								'Ezzel nagyon nehézzé válik pl. az improvizálás vagy saját témák, szólók, dallamok alkotása, továbbá az egyéni ízek kibontakozása. Kénytelenek leszünk előre begyakorol panelekből építkezni, unalmas lerágott megoldásokat használni, belefulladva az állandó önismétlésbe és az unalomba.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '➠ A leszedés eleinte ugyan igen nehéznek tűnhet, de...'
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
											text: 'gyorsan fejlődik'
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
											text: 'folyamatosan tisztul'
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
											text: 'fejleszti a zenei készségeket.'
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
								'A lényeg a fokozatosság. Kezdhetünk könnyebb dallamokkal, kisebb lickekkel. Ezek tudják kifejleszteni az alapokat. '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Ráérzünk a hangközök megtalálására'
						},
						{
							type: 'text',
							text:
								', húrváltásokra, hogy melyik ujjrendekben milyen figurákat tudunk könnyedén megcsinálni. Eleinte már pár hang megtalálása is siker!'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A rendszeresség is alapvető fontosságú. Mindig szedegessünk egy kicsit, ne hagyjunk ki hónapokat.. az agyunknak/kezünknek rá kell szoknia a formulákra.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Az ismétlés könnyít. Ha már ismerünk egy fordulatot, legközelebb egyből ráérzünk a hasonlókra és rááll a kezünk.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Az elméleti háttér is segíthet. '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Ha ismerjük a hangkészletet (skálát), tudjuk, hol kell keresgélnünk...'
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Néhány tipp kezdésnek...'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Egy '
						},
						{
							type: 'text',
							marks: [{ type: 'underline' }],
							text: 'John Petrucci'
						},
						{
							type: 'text',
							text: ' szólót választottam ('
						},
						{
							type: 'text',
							marks: [{ type: 'italic' }],
							text: 'Terminal Velocity'
						},
						{
							type: 'text',
							text:
								'), mert ő régen nagy kedvencem volt. Ez persze nem egy kezdő szintű szóló.. de az alapvető elvek nehézségi szintektől függetlenül ugyanazok. A folyamatot a lenti videóban követheted végig.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Az alapelvek, amelyek felmerültek menet közben:'
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
											text: 'Először a '
										},
										{
											type: 'text',
											marks: [{ type: 'bold' }],
											text: 'hangnemet'
										},
										{
											type: 'text',
											text:
												' fejtettem meg, illetve a zenei hátteret, kíséretet. Ez máris determinálja a lehetséges skálákat.'
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
												'Ha pl. a bevezető lick hallásra kissé blues-os, pentaton alapú, alapvetően mindig a lá-pentaton tájékán érdemes keresgélnünk; sok gitáros keze egyből erre áll rá, ide ugrik kezdésként. Ez itt is így volt.'
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
											text: 'A '
										},
										{
											type: 'text',
											marks: [{ type: 'bold' }],
											text: 'hangközök'
										},
										{
											type: 'text',
											text:
												' kihallása fokozatosan egyre könnyebbé válik, a kezünk már érezni fogja, hová kell ugrania. (Ezt érdemes lehet külön gyakorolni, szekundok, tercek főleg!)'
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
												'Külön fókuszáljunk a slide-okra, mert azok legtöbbször fekvésváltásra utalnak.'
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
												'Ha valami nagyon nehezen jön ki az adott fekvésben, próbáljuk ki egy másikban!'
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
												'A hajlításokat, egyéb technikákat is egyre biztosabban kihalljuk idővel. Ha elsőre még nem, az teljesen természetes.'
										},
										{
											type: 'hardBreak'
										},
										{
											type: 'text',
											marks: [{ type: 'bold' }],
											text: 'Ne kedvetlenedjünk el, legyünk kitartóak!'
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
							text: 'Gyorsabb futamoknál mire figyeljünk?'
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
											text:
												'Érdemes látni a skálát, amire szintén a hangnemből/akkordkörből következtethetünk.'
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
											text: 'Próbáljuk kihallani a '
										},
										{
											type: 'text',
											marks: [{ type: 'bold' }],
											text: 'periódusokat'
										},
										{
											type: 'text',
											text: ' - ezek ált. minden futam alapjai. 3-4-6 hangosok a leggyakoribbak.'
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
											text: 'Vegyük észre bennük az '
										},
										{
											type: 'text',
											marks: [{ type: 'bold' }],
											text: 'ismétlődő elemeket'
										},
										{
											type: 'text',
											text: ' (pl. minden húron 3-3 hang; duplázások, stb)'
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
											text: 'Ha kell, lassítsuk le - de később már ez sem kell majd.'
										}
									]
								}
							]
						}
					]
				},
				{
					type: 'image',
					attrs: {
						src: Picture04.src,
						alt: 'Kép egy gitár hídjáról, kattra irány a kapcsolódó videó',
						title: 'Youtube videó - landmine-gitar csatorna'
					}
				}
			]
		}
	},
	{
		id: 5,
		content: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Mivel eléggé válogatós vagyok, sajnos meglehetősen ritkán találok olyasmi zenéket, amelyekben van valami plusz, valami több, egy apró szikra, ami kiemeli őket a mai hatalmas zenei dömpingből. Rengeteg egymáshoz hasonló, piac-orientált zene van, amik persze így is célt találnak, de ritkán állják ki az idő próbáját, és általában pár hallgatás után eltűnnek lejátszóink listájáról. Ha igazán átjön számunkra egy zene tartalma, hangulata, mondanivalója, azt valahogy mindig tisztán érezzük - és ezektől aztán nem szabadulunk olyan könnyen.. :)'
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Hangorkánok és hangulatfestés'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: `Az Alice In Chains múltja elég régre nyúlik vissza, a '87-es megalakulás, a grunge-os kezdet, ill. Layne Staley halála és a zenekar szünete/újjáalakulása közben sok víz folyt le a zenekar folyóján, de még mindig itt vannak, és két király lemezzel örvendeztették meg rajongóikat.`
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Az újabb éra második fejezete, a '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'The Devil Put Dinosaurs Here'
						},
						{
							type: 'text',
							text:
								' album 2013-ban jelent meg. Persze kissé más már az irány, mint a klasszikussá vált lemezeken, de azért itt van pár védjegy, ami gondoskodik arról, hogy az AIC továbbra is kiemelkedőt alkothasson. Leginkább '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Jerry Cantrell'
						},
						{
							type: 'text',
							text:
								' dalszerzőre gondolok, és az ő sajátos atmoszférájú zenei stílusára. Ami egyébként egy igen kreatív, mégis visszafogott kifejezésmód. Témái, riffjei általában egész egyszerűek, de mégis mindig van bennük valami más, valami nem megszokott apróság, amire felkaphatjuk a fejünket.'
						}
					]
				},
				{
					type: 'image',
					attrs: {
						src: Picture05.src,
						alt: 'Csontváz dinoszaurusz a képen, kattintásra link a Hollow klipjére',
						title: 'AIC - Hollow klip'
					}
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A fenti '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Hollow'
						},
						{
							type: 'text',
							text:
								' pl. máris egy ilyen riffel indít. Kromatikus lépkedés, áttartott magas hangok, hangulatfestő színező szólamok, stb. Közben beúszik a szintén védjegy-szerű többszólamú éneksáv, amivel egy félelmetesen gazdag hangorkánt kapunk már a bridge alatt is (ami elsőre már egy refrénnel is felérne, de azt a második kör végén kapjuk, mint kiteljesedett tetőpontot).'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A lemez felépítése is kiváló, a lezúzó kezdést követően egy picit szellősebb téma következik ('
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Pretty done'
						},
						{
							type: 'text',
							text:
								'); a húzós, egyszerű alapon többszólamú gitártémák süvítenek, egymást követik az ötletes, teljesen klisé-mentes (ének)témák. A pici hangulatfokozó dallamfoszlányokat is nagyon jól eltalálták, sokat tesznek a zenéhez.'
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
							text: 'Stone'
						},
						{
							type: 'text',
							text:
								' keménykötésű, már-már morbid főriffje szintén rendkívül egyszerű, mégis ütős; ráemelkedvén a blues-os hatású ének érdekes elegyet képez, amit a téma-végi kiállások hard rock-os hangulata még tovább fokoz. A gitárszóló aztán megborítja a dalt, nagyon dallamos és kifejező, főleg az a szekundsúrlódás ott a végén. Minden hang a helyén van, nincs fölösleges momentum, lecsupaszított és lényegre törő.'
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Kontrasztok az album gerincén'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Voices'
						},
						{
							type: 'text',
							text: ' lazít az összképen - belefér, bár én sokszor áttekerem...'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A címadó szám elég beteg hangulatú lett, és kicsit talán meglepő is az AIC-től, de nekem nagyon bejön, a klippel együtt. Belassult, elkeseredett trip, sok iróniával és sajátos hangulatokkal. A rövidke szóló itt is nagyszerű, ill. a lezáró téma kegyetlen tiprása is kiemelkedő.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A Lab Monkey és a Low Ceiling újabb lazítás, kissé klasszikusabb hard rock hangvétel, kellemes, szerethető témákkal.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Újabb kedvenc a '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Breath on a Window'
						},
						{
							type: 'text',
							text:
								', amelyben a dal kettőssége és ezek kontrasztja tetszik leginkább. Míg az első rész amolyan "motoros highway" hangulat, a közepén jön a meglepi és az átfordulás. Elúszós bontogatás, majd az azt követő ének-és gitárdallam páros a lemez egyik csúcspontja, abszolút kifejező hangulat, megunhatatlan és gyönyörű az egész, telis tele fájdalommal és együttérzéssel.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ezután muszáj volt újra lazítani (Scalpel).. De aztán jön a pokol, újabb óriási dal '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Phantom Limb'
						},
						{
							type: 'text',
							text:
								' címmel. Ez a dal már inkább metálos, nagyon sötét tónusú; lopakodóan építkezik, s a kétrészes refrén úgy csap le ránk, hogy közben nincs az az érzésünk, mennyire ki van emelve, mert minden téma fontos szereppel bír - de aztán mégis meglepődünk kíméletlenségén, a kis/nagyszeptimmel operáló kvintezéssel, az ólomsúlyú, ezerszólamúnak tűnő kórusokkal, mint egy pusztító vihar.., ill. a lenyugvó résszel, mely esővel mossa el a lerombolt tájakat..'
						}
					]
				},
				{
					type: 'image',
					attrs: {
						src: Picture06.src,
						alt: 'The devil put a dinosaur here (cd booklet)',
						title: 'AIC - The Devil Put a Dinosaur Here borító'
					}
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A szomorkás Hung on a Hook és a Choke zárja a lemezt - és hát marad bennünk egy hangulat.. és alig várjuk, hogy újra végighallgassuk az albumot, de nem lehet, mert kell, hogy maradjon valami későbbre is, hiszen ilyen mesterművel spórolni kell.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A hangzás elég ütős, persze kissé ott van a mai modern digitális mellékíz, de az óriási témák miatt ez alig észrevehető. A zenészi teljesítményre teljesen helytálló használni az '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'alázatos'
						},
						{
							type: 'text',
							text:
								' szót, itt aztán tényleg nincs felesleg, túljátszott szóló vagy dobtéma vagy bármi más. Minden teljesen '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'lényegre törő'
						},
						{
							type: 'text',
							text:
								', és ez példaértékű. A vokáltémák persze nem szegényesek, de ez nálam nem gond :)'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Néhányan úgy vannak vele, hogy Staley nélkül ez már nem AIC - ami jogos is lehet; én személy szerint (bár ezzel valószínűleg majdnem hogy egyedül lehetek) jobban kedvelem a mai vonalat, és a Cantrell-DuVall páros méginkább tetszik. Remélem, a következő lemezük is ilyen szuper lesz, mint ez az album.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ajánlom bárkinek, aki szereti a progresszívebb, sajátos hangulatú rockzenéket.'
						}
					]
				}
			]
		}
	}
]
