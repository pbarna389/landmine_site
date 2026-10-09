import Picture06 from '../../assets/alice3.jpg'
import Picture03 from '../../assets/fules.jpg'
import Picture02 from '../../assets/gyakterv.jpg'
import Picture05 from '../assets/alice2.jpg'
import Picture09 from '../assets/fejes.jpg'
import Picture07 from '../assets/onism1.jpg'
import Picture08 from '../assets/onism2.jpg'
import DefaultPicture from '../assets/play.jpg'
import Picture13 from '../assets/utr1.png'
import Picture14 from '../assets/utr2.png'
import Picture12 from '../assets/utr3.png'
import Picture10 from '../assets/vlog36.jpg'
import Picture11 from '../assets/vlog39.jpg'
import Picture01 from '../assets/vlog47.jpg'
import Picture04 from '../assets/vlog54.jpg'
import type { BlogPostModalType } from '../types'

// TODO: clickable image representation
// TODO: by default, in tiptap, the image config doesn't allow inline placement.
// TODO: To enable it:
// TODO: Image.configure({
// TODO: 	inline: true
// TODO: })

export const BLOGPOST_MODAL_CONTENT: BlogPostModalType[] = [
	{
		id: 1,
		date: '2020-09-20',
		tags: ['theory'],
		content: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Ebben a részben felvázolhatjuk, '
						},
						{
							type: 'text',
							marks: [{ type: 'underline' }],
							text: 'milyen lehetőségeink vannak az improvizálás terén.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Az improvizálásnál vagy szólóírásnál mindig a hangnem, ill. az akkordkör (vagy riff) a meghatározó - ennek megfelelően választhatjuk ki a skáláinkat, amikből dallamokat, figurákat játszhatunk.'
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
							text: 'riffek'
						},
						{
							type: 'text',
							text:
								' legtöbbször egyetlen akkordot "festenek le" lineárisan, így könnyű megfelelő skálá(ka)t találni.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Az alábbi példán egy rock-alapú riffre játszom (az alaphang a D, ill. annak terce és kisszeptime szerepel még, azaz fisz és c). A mixolíd (N3, K7) a legegyértelműbb választás; de ráfér még a d-lá pentaton is, amivel (főleg a K3/N3 súrlódása miatt) egy blues-osabb jelleget adhatunk neki.'
						}
					]
				},
				{
					type: 'image',
					attrs: { src: DefaultPicture.src, alt: 'lejátszás gomb' }
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A fenti azért ritkább eset, nagy százalékban alap dúr/moll hangneműek a riffek, és a skálák így még egyszerűbbek: pentatonok, hétfokú dúr/moll.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Akkordkör'
						},
						{
							type: 'text',
							text:
								' esetén még konkrétabb a helyzet, mert az akkordokhoz egyből kapcsolódnak a hozzájuk illő skálák.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Foglaljuk össze elsőként, milyen akkordokra milyen hangsorok felelnek meg!'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'(A könnyebb átláthatóság miatt csak a leggyakrabban használt lehetőségeket vesszük számba)'
						}
					]
				},
				{
					type: 'image',
					attrs: { src: Picture12.src, alt: 'akkord-skála tábálzat' }
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Téma- és hangulatfüggő, mennyire "törünk szét" egy-egy akkordkört. Van, hogy az egyszerűsítés elvét érdemes követni (azaz egyetlen skálát használni végig, hangnem szerint); máskor pedig belefér az is, ha az egyes akkordokat külön-külön fejezzük ki..'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Gyors példaként adott egy akkordkör:'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							marks: [{ type: 'textStyle', attrs: { fontSize: '20px' } }],
							text: 'C, Em, C, Em, G, D, Em, Am.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Itt pl. mehet rá simán egy e-moll skála (ahol C akkordon az e-moll skála lídnek felel meg, D akkordon mixolídnek - de a hangnemi gyökér miatt az egészet e-mollnak halljuk, és nem érzünk modálisokat).'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Ahhoz, hogy összetettebb akkordmenetekre improvizálni/szólózni tudjunk, biztosan kell ismernünk a fenti táblázatot (lehetőleg számolgatás nélkül); valamint hangszerünkön is magabiztosan kell tudnunk használni őket. Ez természetesen megkíván némi előkészítést, ill. sok-sok gyakorlást... itt most csak az elmélti háttérre nézünk lehetőségeket.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Haladjunk tehát sorban, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'kezdjük a legegyszerűbb lépcsőfokokkal'
						},
						{
							type: 'text',
							text: ', és fokozatosan építsük fel a fentieket!'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Elsőként nem is feltétlenül csak skálákkal lehet kezdeni; nagyon hasznos tud lenni, ha egy harmóniamenet egyes akkordjait külön-külön is ki tudjuk fejezni. Erre jók az '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: ' akkordbontások (arpeggiók).'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Az arpeggiók pontosan az akkord hangjait tartalmazzák.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Az alábbi példán kizárólag bontásokat használok.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'Az akkordkör: '
						},
						{
							type: 'text',
							marks: [{ type: 'textStyle', attrs: { fontSize: '20px' } }],
							text: 'Cm7-F7-Bbmaj7 (azaz II-V-I).'
						}
					]
				},
				{
					type: 'image',
					attrs: { src: DefaultPicture.src, alt: 'link youtube videóra' }
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Ezekre aztán már könnyebb "felhúzni" a skálákat, pontosabban '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'vegyíteni a kétféle megközelítést'
						},
						{
							type: 'text',
							text: ' (lineáris-horizontális).'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Lent ugyanerre az akkordkörre játszom vegyesen. Skálák tekintetében az alap bé-dúr mellett az I. fokú Bbmaj7 akkordra lídet használok.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'(A bé-dúr skála Cm7-re vetítve egy c-dórnak, F7-re vetítve egy f-mixolídnak felel meg, de a bé-dúr hangnemi centrum miatt itt egyszerűen b-dúrnak halljuk a skálát)'
						}
					]
				},
				{
					type: 'image',
					attrs: { src: DefaultPicture.src, alt: 'youtube link' }
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Stílusfüggő'
						},
						{
							type: 'text',
							text:
								', mi fér még rá egy-egy akkordkörre. Jazzesebbé tehetjük pl. a hangzást, ha kromatikus átvezetőket, körülírásokat rakunk a szólóba. Ha a kíséretet szabadabban értelmezzük, az alterált akkordokkal (pl. F7#5#9) és skálákkal is eljátszhatunk..'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Fontos még, hogy akkordváltásoknál, kitartott hangoknál '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'jó helyekre lépjünk'
						},
						{
							type: 'text',
							text:
								' A legjobbak az akkordhangok (ezért is jó látni a bontásokat, akkordképeket), esetleg a szekund vagy a "hatos" - helyzettől függ.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'underline' }],
							text: 'További ötletek:'
						},
						{
							type: 'hardBreak'
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
												'igazodhatunk az adott témához, stílushoz, megnézhetjük, mi az, amit hangulatban elbír és mi az, amit nem..'
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
											marks: [{ type: 'bold' }],
											text: 'a skála csak eszköz'
										},
										{
											type: 'text',
											text:
												', alárendelve a dallamoknak, a hangulatoknak, a kifejezéseknek, a mondanivalónak..'
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
												'nem érdemes gyömöszölni túl sokféle skálát egy körbe, attól csak zsúfoltabb és darabosabb lesz, semmiképp sem izgalamsabb..'
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
												'elválaszthatjuk (szünetekkel) az egyes részeket, különálló mondatokban gondolkodjunk..'
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
											text: 'a karakteres, frappáns motívumok a fontosak, nem a minél több hang..'
										}
									]
								}
							]
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Akkordszólók'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Amikor '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'az akkordokat és a skálákat vegyítjük'
						},
						{
							type: 'text',
							text: ', akkordszólókat kapunk.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Akkordszólók lehetnek rövidke kis motívumok, vagy egész darabok is. Lényeg, hogy harmóniákat is kifejezzünk, és mellettük (vagy ezzel együtt) dallamokat is kapjunk.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Nézzünk néhány variációt a fenti körre (Cm7-F7-Bbmaj):'
						}
					]
				},
				{
					type: 'orderedList',
					content: [
						{
							type: 'listItem',
							content: [
								{
									type: 'paragraph',
									content: [
										{
											type: 'text',
											text: 'csak egy-egy hanggal színezzük az akkordokat'
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
											text: 'konkrétabb dallamokkal színezzük'
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
												'vegyesen használjuk (egy-egy akkordot skálákkal/arpeggiókkal fejezünk ki)'
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
											text: 'a különféle akkordfordítások legmagasabb hangjai rajzolnak ki dallamot'
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
											text: 'szekvenciákat használunk'
										}
									]
								}
							]
						}
					]
				},
				{
					type: 'image',
					attrs: { src: DefaultPicture.src, alt: 'youtube link' }
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Hangnemváltások'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Ha egy-egy téma után valami újat (hangulatot, váltást) szeretnénk behozni, izgalmas lehetősgeket nyújthatnak a hangnemváltások.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Hangnemet váltani bármikor és bárhogyan lehet, nincs rá különösebb szabály.. lehet valamilyen ritmikai tördeléssel, vagy harmónia-alapon is. Nézzünk azért néhány tippet! ('
						},
						{
							type: 'text',
							marks: [{ type: 'underline' }],
							text: 'Próbáljuk ki'
						},
						{
							type: 'text',
							text: ' őket hangszerünkön!)'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '➠ Ha a hangnemváltás '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'előkészített'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Előkészítés alatt azt érthetjük, hogy harmóniailag értelmezhetően vezetjük át a két hangnemet.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Vegyük a fenti akkordkört (Cm7-F7-Bbmaj7). Gondolhatunk úgy az egyes akkordokra, hogy azok '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'többféle funkcióval'
						},
						{
							type: 'text',
							text:
								' is bírhatnak. Major7 akkord hol is fordulhat elő egy hangnemben? I. és IV. fokon. A Bbmaj7 akkordot vehetjük tehát kettős funkciójú akkordnak: az I. fok (tonika) mellett lehetne akár IV. fok is (szubdomináns) - azaz egy F-dúr hangnem IV. foka.'
						}
					]
				},
				{
					type: 'image',
					attrs: { src: Picture13.src, alt: 'hangnem áthidalás magyarázatat' }
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Az elválasztó akkord tehát a Bbmaj7, amely a Bb-dúr (II-V-I) és az F-dúr (IV-II-V-I) hangnemeket hidalja át.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: '➠ Funkciót váltunk'
						},
						{
							type: 'text',
							text: ' azonos akkorddal'
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
											marks: [{ type: 'textStyle', attrs: { fontSize: '20px' } }],
											text: 'Cm7-F7-Bbmaj7- | -Bb7-Ebmaj7'
										},
										{
											type: 'text',
											text: ' (V-I esz-dúrban)'
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
											marks: [{ type: 'textStyle', attrs: { fontSize: '20px' } }],
											text: 'Cm7-F7-Bbmaj7-|-Bbm7-Eb7-Abmaj7'
										},
										{
											type: 'text',
											text: ' (II-V-I asz-dúrban)'
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
							marks: [{ type: 'bold' }],
							text: '➠ Váltódomináns'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Az I. fokra való feloldás helyett a Bb akkordot az új hangnem jegyében egyből domináns (V.) fokként gondoljuk el.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Jellegzetes lépés, hogy két dom7 akkord kerül egymás mellé, mintegy láncban váltják egymást..'
						}
					]
				},
				{
					type: 'image',
					attrs: { src: Picture14.src, alt: 'váltódomináns magyarázat' }
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: '➠ Tritonusz-csere'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Az F7 nem oldódik fel, hanem annak tritonuszcseréjét beiktatva új hangnembe kerülünk.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: '(Tritonusz=Sz5, vagyis F7 esetén H7)'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: '➠ De hangnemet válthatunk teljesen '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'spontán'
						},
						{
							type: 'text',
							text: ' is, mindenféle előkészítés nélkül...'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Legegyszerűbb módja, ha rokon hangnemekbe (1-2 hang eltérés) lépünk át.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							marks: [{ type: 'textStyle', attrs: { fontSize: '20px' } }],
							text: 'Pl. e-moll → a-moll vagy F-dúr → Bb-dúr'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'... de még ez sem feltétel - ha ügyesen van megoldva lehet, egészen távoli hangnem is.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: '➠ Hangnemi kitérés'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'textStyle', attrs: { fontSize: '20px' } }],
							text:
								'A következő kör egy jazzes-menet C-dúrban, ahol a Db9 az V. fokú G7 tritonuszcserés akkordja, a Dm7 a II. fok; az Eb9 pedig szintén egy tritonuszcserés megoldás: A7 cseréje - utóbbi a Dm7 V. foka (=körön belüli V-I lépés d-mollban).'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ez ugyan nem minősül hangnemváltásnak, csak egy kis kitérés - viszont figyeljük meg, milyen szépen ereszkedik az akkordok basszusa kromatikusan!'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'textStyle', attrs: { fontSize: '20px' } }],
							text: 'Cmaj7-Eb9-|-Dm7-Db9-|-Cmaj7 |'
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Hogyan építsünk fel egy szólót?'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Természetesen erre sincs általános recept, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'minden a környezettől függ'
						},
						{
							type: 'text',
							text:
								'... Egyrészt illenie kell szólóinknak az alapunk stílusához, tempójához, hangulatához, ritmikai lüktetéséhez. Ezek a legfontosabbak.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A skálák kikeresése csak az első lépés - viszont ebből már könnyű elindulni.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Rövidebb szólók esetén mindenképp jó, ha van egy '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'dallamosabb alap-motívum'
						},
						{
							type: 'text',
							text:
								', amit aztán szépen tovább lehet fűzni, de akár el is lehet vinni teljesen más irányokba - megint csak hangulattól függ, mit hozunk ki egy-egy szólóból. Hosszabb impro-k esetén érdekesebb lehet pl. a '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'struktúra'
						},
						{
							type: 'text',
							text:
								'. Az első néhány ütem (felvezető szakasz) visszafogottabb dallamait követhetik az egyre összetettebbek; a tetőpontra érve felvihetjük dallamíveinket magasabb'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text: 'hangtartományokba, dolgozhatunk gyorsabb, technikásabb figurákkal..'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Egy-egy motívum is ezerféle lehet; léteznek bevezető motívumok, lezárók, felvezetők, fokozók, tetőpontok, stb... Minden szólóban hasznosak a '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'visszatérő motívumok'
						},
						{
							type: 'text',
							text: ', az apró (akár ritmikai, akár dallami) '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'ismétlések'
						},
						{
							type: 'text',
							text:
								', mert ezek kapaszkodót jelenthetnek a hallgatóknak, és adnak a szólónak egy értelmezhető szerkezetet, ill. akár keretet is.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Érdemes lehet sok szólót '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'végigelemezni'
						},
						{
							type: 'text',
							text:
								', megtanulni, rengeteg ötletet meríthetünk belőlük. Megfigyelhetjük, hogyan használnak ritmikákat, variációkat, ismétléseket, hogyan fejtik ki az alapdallamokat, hogyan érnek el a tetőpontokig; és persze, hogy hogyan bánnak a skálákkal, milyen hangokra érkeznek..'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Szólóírás vagy impro gyakorlásához hasznosak lehetnek a különféle stílusú és tempójú '
						},
						{
							type: 'text',
							marks: [{ type: 'underline' }],
							text: 'backing trackek'
						},
						{
							type: 'text',
							text: ' - melyekhez minta-szólókat is találsz.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'További jó zenélést! :)'
						}
					]
				}
			]
		}
	},
	{
		id: 2,
		date: '2025-09-15',
		tags: ['advices'],
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
									type: 'paragraph',
									content: [
										{
											type: 'text',
											text: 'PARENT TEST'
										}
									]
								},
								{
									type: 'bulletList',
									content: [
										{
											type: 'listItem',
											content: [{ type: 'paragraph', content: [{ type: 'text', text: 'TESZT1' }] }]
										},
										{
											type: 'listItem',
											content: [{ type: 'paragraph', content: [{ type: 'text', text: 'TESZT2' }] }]
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
							marks: [{ type: 'textStyle', attrs: { backgroundColor: '#f9e601' } }],
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
		id: 3,
		date: '2025-01-29',
		tags: ['advices', 'facts'],
		content: {
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A jó zenei hallás a zenélés bármely területén hatalmas előny. Ha nem csak értjük, hanem érezzük is a zenei folyamatokat, az sokkal spontánabbá tudja tenni a játékot, az improvizálást, és a zeneírást egyaránt.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ennek a gyakorlásnak az egyik fontos és ajánlott eleme a hallás utáni leszedés.'
						}
					]
				},
				{
					type: 'image',
					attrs: {
						src: Picture09.src,
						alt: 'A FEJES',
						title: 'Marshall fejhallgató a jobb halláskárosodás reményében'
					}
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Bevezető gyakorlatok'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'Mielőtt nekiugranánk egy teljes dal vagy szóló, netán akkordkör lefülelésének, érdemes lehet felvezetni a folyamatot egy kis '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'izolált gyakorlással.'
						},
						{
							type: 'text',
							text:
								' Ha magabiztosak vagyunk az apró részletekben, sokkal jobb eséllyel fog sikerülni "nagyban" is.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Feljátszhatunk magunknak hangközöket, kisebb dallamokat, ritmusokat, majd ezeket visszafejthetjük hallás után - végül az elején feljegyzett "megoldókulcsunkkal" ellenőrizhetjük.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Gyakorolhatunk külön akkordmeneteket - minél több ilyet csinálunk, annál jobban "megmaradnak fülben" fordulatok, sémák.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ha bizonyos elemek nehezen mennek, legalább tudjuk, milyen területekre kell több figyelmet fordítanunk.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A sikerélmény ezen a téren is igen fontos, tehát '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'ne féljünk minél egyszerűbb dalokkal kezdeni.'
						},
						{
							type: 'text',
							text:
								' Egy párakkordos sláger, egy kisebb gitárdallam, egy könnyed rock dal több, mint megfelelő kezdetben. Ha már belejöttünk, folyamatosan jöhetnek a nehezebbek.'
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Néhány tipp, amik segíthetnek elindulni'
						}
					]
				},
				{
					type: 'orderedList',
					content: [
						{
							type: 'listItem',
							content: [
								{
									type: 'paragraph',
									content: [
										{
											type: 'text',
											text: 'Dallamok, szólók esetén:'
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
															text: 'a hangnem megfejtése megmutatja a '
														},
														{
															type: 'text',
															marks: [{ type: 'bold' }],
															text: 'skálát'
														},
														{
															type: 'text',
															text: ', amin mozog, így tudjuk, egyáltalán hol kell keresgélni'
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
																'loop-olhatunk pár hangos kis részleteket, és lassíthatunk is (a technika a barátunk)'
														},
														{
															type: 'text',
															text:
																'ha egyből rájátszuk a zenére, jobban halljuk az esetleges eltéréseket'
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
															text: 'később figyelhetünk külön a '
														},
														{
															type: 'text',
															marks: [{ type: 'bold' }],
															text: 'hangképzés'
														},
														{
															type: 'text',
															text: 'finomságaira (hajlítások, hammer-pull technikák, stb)'
														}
													]
												}
											]
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
											text: 'Akkordkörök, riffek esetén:'
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
															text: 'ha a '
														},
														{
															type: 'text',
															marks: [{ type: 'bold' }],
															text: 'basszusokra'
														},
														{
															type: 'text',
															text: 'figyelünk, az a legtöbb esetben megmutatja az akkordok alaphangait'
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
																'egy kis elméleti jártassággal a hangnemből is lehet következtetni az akkordokra, ill. azok minőségeire'
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
																'szokatlanabb akkordokat megpróbálhatunk elemeire bontani, akár hangközökre, hangokra is'
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
																'a riffek általában valamilyen skálán mozognak, esetleg akkord-részletekből dolgoznak, tehát érdemes'
														},
														{
															type: 'text',
															marks: [{ type: 'bold' }],
															text: 'összefüggéseket keresni'
														},
														{
															type: 'text',
															text: ' ezekkel'
														}
													]
												}
											]
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
								'Összességében az izolált gyakorlás és a zeneelméleti megértés, következtetés segíthetik a folyamatot, de minél több leszedésen vagyunk már túl, annál kevésbé lesz szükség mankókra. A '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'zenei sémák, fordulatok'
						},
						{
							type: 'text',
							text:
								' épp úgy tudnak rögzülni, akár egy dallam. Egyszóval akármilyen meglepő is, itt is a gyakorlás hozza meg az eredményt és a sikereket ;)'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							marks: [{ type: 'textStyle', attrs: { backgroundColor: '#F29A9A' } }],
							text: 'A lenti videókban'
						},
						{
							type: 'text',
							text: ' egy-egy ilyen folyamatot mutatok be részleteiben.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'image',
							attrs: {
								src: Picture10.src,
								alt: 'Riff-leszedési technikák videó link',
								title: ''
							}
						},
						{
							type: 'image',
							attrs: {
								src: Picture11.src,
								alt: 'Akkord-leszedési technikák videó link',
								title: ''
							}
						}
					]
				}
			]
		}
	},
	{
		id: 4,
		date: '2026-04-06',
		tags: ['advices', 'facts'],
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
								'), mert ő régen nagy kedvencem volt. Ez persze nem egy kezdő szintű szóló.. de az alapvető elvek nehézségi szintektől függetlenül ugyanazok. A folyamatot '
						},
						{
							type: 'text',
							marks: [
								{
									type: 'textStyle',
									attrs: {
										backgroundColor: '#FFD700'
									}
								}
							],
							text: 'a lenti videóban'
						},
						{
							type: 'text',
							text: ' követheted végig.'
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
		date: '2018-04-03',
		tags: ['music'],
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
	},
	{
		id: 6,
		date: '2017-11-13',
		tags: ['philosophy'],
		content: {
			type: 'doc',
			content: [
				{
					type: 'image',
					attrs: {
						src: Picture07.src,
						alt: 'A magányos kondenzátor mikrofon magában lamentál az élet hasztalanságán',
						title: 'Önismeret - tuti, hogy az éneklés nekem való? :D'
					}
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A különféle kultúrákban mindig is megvoltak a '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'sajátságos utak'
						},
						{
							type: 'text',
							text:
								' önmagunk mélyebb, valódibb megismeréséhez. Keleten a direktebb utaknak több száz éves hagyományaik vannak (mint pl. a meditációk, a különböző ezoterikus technikák), sőt az egyik legősibb tan, a buddhizmus középpontjában is épp ez az igény áll. Ilyesmi utak Európában is léteztek, de a modernkori kereszténység és a tudományos világkép kibontakozása háttérbe szorította őket. Egyedüli kivételként talán a pszichológiát lehetne említeni, amit a materialista uralom mégis legalizált (talán, mert belátták, hogy a psziché nem kezelhető kizárólag anyagi módszerekkel).'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'Ettől függetlenül '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'az önismeret nem kíván feltétlenül ilyen direkt eszközöket'
						},
						{
							type: 'text',
							text:
								'. Vannak közvetett utak is, amelyek ugyanolyan hatékonyak, sőt, jóval tapasztalatibbak, mint a fent említett technikák. Ilyen pl. a művészet.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A művészet nagyjából egykorú az emberiséggel. Az igény, hogy önmagunkat felfedezzük és kifejezzük, egy belénk kódolt program. '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text:
								'A művészetben való elmélyülés analogikusan az önmagunkba mélyedésnek felel meg.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Mondhatni, a kettő ugyanaz, s együtt történik - amihez a művészeti forma egy remek '
						},
						{
							type: 'text',
							marks: [{ type: 'italic' }],
							text: 'eszköz.'
						}
					]
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Forma és tartalom'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A fenti aspektus hamarosan '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'tartalmi részekkel egészülhet ki'
						},
						{
							type: 'text',
							text:
								', ami folyamatosan mélyülhet. Itt az intellektus már háttérbe szorul, helyét valami megfoghatatlanabb veszi át: az inspiráció, az átélés, az intuíció, a kreativitás, stb. A művészeti tartalom dimenziója az érzelem, munkája egyre kevésbé kontrollált.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'A tartalmi szféra újabb önismereti rétegeket tudatosít: finomabb érzelmeket, hangulatokat fed fel, vagy alakít ki bennünk. Néha olyan dolgokat is felszínre hoz, amik a tudatküszöb alatt szunnyadtak elfedve. Utóbbiak lehetnek kifejezetten örömteliek - de akár félelmetesek vagy taszítóak is. A tartalmi szint mindig hordoz magában drámaiságot, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'hatása felkavaró lehet'
						},
						{
							type: 'text',
							text:
								'az érett befogadó számára (is). Viszont az önismeret erről szól: minden, ami vagyok, vagy ami bennem van, azzal őszintén szembenézni, megismerni és elfogadni.'
						}
					]
				},
				{
					type: 'image',
					attrs: {
						src: Picture08.src,
						alt: 'kép egy kognitív viselkedéstanhoz köthető mindmapről',
						title: 'kép egy kognitív viselkedéstanhoz köthető mindmapről'
					}
				},
				{
					type: 'heading',
					attrs: { level: 2 },
					content: [
						{
							type: 'text',
							text: 'Mi vár az út végén...?'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text: 'A művészet, mint út (tao) idáig vezethet el. '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'A művészet az emberé, és az emberről szól.'
						},
						{
							type: 'text',
							text:
								' Elsősorban a személyről. Beleértve annak minden mentális és érzelmi lényegét.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ahogy mélyül a tartalmi dimenzió, különféle tulajdonságaink, érzelmeink, hangulataink egyre megfoghatatlanabbakká válnak. Egy-egy kifejezés rájuk aggatása már közel sem fejezi ki teljességüket és sokrétűségüket. Nézőpontiságuk eltűnik. Mintha kezdenének egymásba olvadni, eggyé válni. Az "önmagunk", amit a művészettel, mint eszközzel és úttal mélyebben megismertünk, kezd transzparenssé válni.'
						}
					]
				},
				{
					type: 'paragraph',
					content: [
						{
							type: 'text',
							text:
								'A zene a forma szintjén eszköz. A tartalom szintjén út és eszköz egyszerre - és végül "kijárat". A fejlődés, a szándék, a stílus: forma; a belső küzdelem, az elengedés, a felismerés: tartalom.'
						},
						{
							type: 'hardBreak'
						},
						{
							type: 'text',
							text:
								'Ami ezen túl van, oda a művészet már nem érhet el. Ott a művészet már nem létezik, s a személy is feloldódott. Az "önismeret" oda vezet, ami ezután is fennmarad, s ami mindig is voltunk. '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'Az önismerettel így valójában azt ismertük fel'
						},
						{
							type: 'text',
							text: ', ill. azt (az illúziót és külső burkot) hárítottuk el, '
						},
						{
							type: 'text',
							marks: [{ type: 'bold' }],
							text: 'amik nem vagyunk.'
						},
						{
							type: 'text',
							text: ' És ami marad, az a valódi.'
						}
					]
				}
			]
		}
	}
]
