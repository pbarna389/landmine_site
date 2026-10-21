import type { DocType } from '@/types'

import PICTURE_01 from '../assets/along.jpg'
import PICTURE_12 from '../assets/archaic4.jpg'
import PICTURE_04 from '../assets/august2.jpg'
import PICTURE_06 from '../assets/blood.jpg'
import PICTURE_03 from '../assets/choco.jpg'
import PICTURE_17 from '../assets/clouds.jpg'
import PICTURE_09 from '../assets/coast2.jpg'
import PICTURE_05 from '../assets/coffee2.jpg'
import PICTURE_08 from '../assets/enjoy.jpg'
import PICTURE_11 from '../assets/hetiblues.jpg'
import PICTURE_15 from '../assets/highway.jpg'
import PICTURE_10 from '../assets/imagine.jpg'
import PICTURE_20 from '../assets/mng.jpg'
import PICTURE_16 from '../assets/neo2.jpg'
import PICTURE_02 from '../assets/shark2.jpg'
import PICTURE_13 from '../assets/spring.jpg'
import PICTURE_19 from '../assets/terc.jpg'
import PICTURE_18 from '../assets/trem.jpg'
import PICTURE_07 from '../assets/triangle.jpg'
import PICTURE_14 from '../assets/walk.jpg'

const EXAMPLES_METAL_TEXT = [
	{
		id: 'metal-1',
		text: 'a klasszikus rock-tól az alternatív zenéken át a modern metálig'
	},
	{
		id: 'metal-2',
		text: `a '60-as évektől napjainkig; külföldi és hazai bandáktól is`
	},
	{
		id: 'metal-3',
		text: 'stílusgyakorlatok és sok szuper dal a nagyoktól'
	}
]

const EXAMPLES_FUNK_POP_ACU_TEXT = [
	{
		id: 'funk-1',
		text: 'külföldi és magyar slágerek, a klasszikusoktól napjainkig'
	},
	{
		id: 'funk-2',
		text: `tábortűzi kísérettől a komplex funky témákig`
	},
	{
		id: 'funk-3',
		text: 'átiratok, többszólamú témák, akusztikus zenék'
	}
]

const EXAMPLES_BLUES_JAZZ_TEXT = [
	{
		id: 'jazz-1',
		text: 'a swingtől a jazzrock-on át a modern jazz-ig'
	},
	{
		id: 'jazz-2',
		text: `az archaikus blues-tól a mai fúziós szólókig`
	},
	{
		id: 'jazz-3',
		text: 'stílusgyakorlatok, elmélet, improvizációk, teljes dalok'
	}
]

const EXAMPLES_TECH_THEORY_TEXT = [
	{
		id: 'tech-1',
		text: 'dallamos, színes technikai etüd-ök, korszerű technikákkal'
	},
	{
		id: 'tech-2',
		text: `kidolgozandó összhangzattani példák`
	},
	{
		id: 'tech-3',
		text: 'elemzések, hangszerelések, trükkök'
	}
]

const EXAMPLE_METAL_CONTENT = [
	{
		id: 1,
		name: 'Klasszik rock',
		content: {
			name: 'Along traditions',
			difficulty: 3.36,
			img: PICTURE_01,
			link: 'https://www.youtube.com/watch?v=QrHyOgzEOKE',
			text: `Mik voltak jellemzők a '60-es, '70-as, '80-es évek rockzenéire? Hogyan épültek fel a dalok? Milyen motívumokat használtak a szólókban? Mik voltak a legkedveltebb akkordmenetek és hogyan alakították riffekké őket?Akik kedvelik ezt az irányt, a rock-stílusgyakorlatokban ilyesmikre kaphatnak választ, ill. előkészíthetik a terepet a klasszikus rock-dalok tanulására, ill. átlátására. Olyan zenekarok dalaiból csemegézve, mint a Zeppelin, a Doors, a Stones, a Deep Purple, a Queen, a Guns'n Roses, az Aerosmith, a Maiden - és még sok más!`
		}
	},
	{
		id: 2,
		name: 'drop metal',
		content: {
			name: 'Shark tale',
			difficulty: 3.6,
			img: PICTURE_02,
			link: 'https://www.youtube.com/watch?v=R71zbrwYyMQ',
			text: `A modern rock-metal zene előszeretettel használja a drop hangolásokat, melyben e téma is íródott. A groove-os riffek, a modern elemeket is felvonultató szólók igen jellemzőek ezekben a dalokban. Különféle tematikájú témákkal és sok-sok technikai elemmel fejleszthetjük játékunkat, skálák felhasználási módjaival ismerkedhetünk, hogy később a kihívást jelentő mai zenék se okozhassanak gondot. Mindig zenére gyakorlunk, s ezzel a ritmusérzék is észrevétlenül fejlődhet!`
		}
	},
	{
		id: 3,
		name: 'Pop-rock',
		content: {
			name: 'Chocolate',
			difficulty: 2.4,
			img: PICTURE_03,
			link: 'https://www.youtube.com/watch?v=aAs41Edq5lA',
			text: `Kezdő szinten is fontos a gyors sikerélmény, így már az elején megpróbáljuk élvezetessé tenni a gyakorlást az ehhez hasonló egyszerűbb, dallamos témákkal. A cél az, hogy könnyedén ivódjanak be az olyan technikai elemek, mint a slide-ok, a hajlítások, a vibrátók, ill. hogy menet közben még át is lássuk, milyen skálákból épül fel egy-egy motívum. A bátrabbak már improvizálhatnak is a szólókörökre, melyekhez minden témánál biztosítok zenei alapot (backing track-et)!`
		}
	},
	{
		id: 4,
		name: 'Grunge',
		content: {
			name: 'Along traditions',
			difficulty: 3.5,
			img: PICTURE_04,
			link: 'https://www.youtube.com/watch?v=vlmtg2_oNn0',
			text: `A rockzene "könnyedebb" ágaival is megismerkedhetünk, legyen szó akár progresszív rock-ról (pl. Toto, Pink Floyd, Dream Theater), akár grunge-ról (pl. Audioslave, Pearl Jam, STP), akár alternatív zenékről (pl. Faith No More, Red Hot Chili, Radiohead, magyar bandák...). Az itt szereplő kis téma a grunge (és a strat) kedvelőinek nyújt némi betekintést, akik éppen ismerkednek a stílussal, jellegzetességekkel, megközelítésekkel. Fontos az alapozás, hogy legyen mire építeni!`
		}
	},
	{
		id: 5,
		name: 'Thrash',
		content: {
			name: 'Coffee Grinder',
			difficulty: 4.35,
			img: PICTURE_05,
			link: 'https://www.youtube.com/watch?v=QrHyOgzEOKE',
			text: `Akik kedvelik a keményebb stílusokat, azoknak meg kell bírkózniuk a sokszor igen nehéz technikákkal és tempókkal. Ennek érdekében külön megcélozhatjuk ezeket a területeket. Legyen az kemény vagy gyors riffelés, precíz játék, szólók tisztítása, stb., a folyamatosság a kulcstényező. Ha szintenként emeljük a gyakorlási tempókat, a finom mozgások könynebben be tudjanak ivódni, az elemek be tudjanak érni. Azután már bátrabban szembenézhetünk pl. a Metallica, az Extreme, a Tool, az Opeth, vagy épp a gitárhősök (Satriani, Vai) dalaival is!`
		}
	}
]

const EXAMPLE_FUNK_POP_ACU_CONTENT = [
	{
		id: 1,
		name: 'Funk',
		content: {
			name: 'Blood on the lemon',
			difficulty: 5,
			img: PICTURE_06,
			link: 'https://www.youtube.com/watch?v=QiWTDSVuZ7k',
			text: `A funky-alapú ritmusozás laza és erős csuklót kíván, ill. sok apró mozdulatot és trükköt, hogy az a megfelelő dinamikákkal szólaljon meg. A funk-stílusgyakorlatokkal ezeket a mozgásokat gyakorolhatjuk és fejleszthetjük. A szólóknak ebben a stílusban is megvannak a jellegzetességei - csakúgy, mint a riffeknek, melyek akár más stílusokból is hozhatnak hatásokat. A funky technikai elemeit bárhol ötletesen meg tudjuk forgatni; élénk lüktetése szinte kínálja magát az improvizációk számára!`
		}
	},
	{
		id: 2,
		name: 'fingerpicking',
		content: {
			name: 'Windy and warm',
			difficulty: 4.4,
			img: PICTURE_07,
			link:
				'https://www.youtube.com/watch?v=c53fjqufTAg&list=PLn5cNXlh5JYOZigYO1-umN1VNT6dCzj0o&index=2',
			text: `A "fingerpicking" egy izgalmas akusztikus technika, melynek alapja a váltóbasszusos, ragtime-os lüktetés - és erre kerül rá az akkordmenet ill. a dallamsor. Tehát egyszerre hozzuk a dallamot és a kíséretet! Fontos eszközeink a stílusnál: capo, és hüvelykujj-pengető. Leghíresebb képviselői: Tommy Emmanuel, Chat Atkins.. Finom alapozással áshatunk a dolgok mélyére, majd az automatikussá vált komplex technikákkal elkezdhetjük tanulni a jobbnál jobb dalokat!`
		}
	},
	{
		id: 3,
		name: 'akusztikus',
		content: {
			name: 'Enjoy the ride (Morcheeba)',
			difficulty: 3.5,
			img: PICTURE_08,
			link: 'https://www.youtube.com/watch?v=k46kTjthxp0',
			text: `A különféle akusztikus átiratok nagyon szuperül szólnak, legyen szó egyszerűbb, slágeres dalokról, vagy épp kemény rock témákról. Rengeteg-féle hangulatot ki lehet hozni egy-egy jól megválasztott hangolásból, egy frappáns ötletből, egy jó akkord-átalakításból - sőt, akár teljesen új dimenziót is nyithatunk így az eredeti verzióknak. Ha néhány megtanulásával, elemzésével szert tettünk egy kis rutinra, még sajátokkal is próbálkozhatunk - melyhez nincs is szükség másra, csak egy szál gitárra és egy-egy kedvenc dalra!`
		}
	},
	{
		id: 4,
		name: 'klasszikus',
		content: {
			name: 'Along On the coast of the sea',
			difficulty: 3.75,
			img: PICTURE_09,
			link: 'https://www.youtube.com/watch?v=vlmtg2_oNn0',
			text: `Az akusztikus zenék mindig üde színfoltot jelentenek a könnyűzenei palettán, tradicionális hangzásuk, dinamikai gazdagságuk sok-sok örömet okoz bármely zenésznek és hallgatónak. Játéktechnikában sokszor meglehetősen eltérnek elektromos társaiktól, valamint zenei téren is más gondolkodásmódot és megközelítést kívánnak. Akik szívesen elmerülnének ebben a világban, azokkal sokféle gyakorlatból és dalból is csemegézhetünk!`
		}
	},
	{
		id: 5,
		name: 'sláger/átirat',
		content: {
			name: 'Imagine (John Lennon)',
			difficulty: 1.6,
			img: PICTURE_10,
			link: 'https://www.youtube.com/watch?v=_4pVPt5x-Ls',
			text: `Egy-egy klasszikus vagy modern sláger nagyon izgalmasan átültethető különféle hangszerelésekbe. Akár szóló darabként, akár többszólamú témaként kezelve egészen új élményeket kaphatunk ezektől az egyszerű daloktól. A különböző szemléletek és variációk szélesíthetik látókörünket, miközben akár a hallást, a dallamérzéket is fejlesztik. Hamar adnak sikerélményt - és nem utolsósorban könnyen megörvendeztethetjük velük rokonainkat, barátainkat is! ;)`
		}
	}
]

const EXAMPLE_BLUES_JAZZ_CONTENT = [
	{
		id: 1,
		name: 'Texas blues',
		content: {
			name: 'Texas blues szóló',
			difficulty: 4.45,
			img: PICTURE_11,
			link: 'https://www.youtube.com/watch?v=vBoAziBA16Q',
			text: `A blues a legtöbb modern műfaj alapja, így érdemes lehet ezzel is ismerkedni: ebben segítenek a blues-stílusgyakorlatok. A klasszikus 12 ütemes forma egyeduralma mellett találkozni azért ma már afféle ötvözetekkel is, pl. jazzbe ültetve, vagy éppen rock alapokra helyezve (mint a jelen példában). Clapton, SRV... A blues az improvizálásról szól, de hasznos néha megtanulni 1-1 szólót, akkordkör-variációt is, majd elemezni, mi-hogy-miért történik - ezekből aztán beépíthetünk ezt-azt saját szólóinkba, gondolkodásmódunkba is!`
		}
	},
	{
		id: 2,
		name: 'jazzrock',
		content: {
			name: 'Archaic house',
			difficulty: 2.678,
			img: PICTURE_12,
			link: 'https://www.youtube.com/watch?v=zhtx5ty4UEs',
			text: `A jazzrock egy olyan szintetizált műfaj, ahol kétfajta gondolkodásmód is tetten érhető: a jazzre jellemző kifinomultság (dinamikák, frazírok, összetett akkordok és skálák) a rock lendületével (és sokszor erős hangszíneivel) keveredik. Az elméleti- és improvizációs alapozás, ill. néhány rávezető téma után a nagyoktól is tanulhatunk (pl. Robben Ford, Pat Metheny, Julian Lage, stb.) és próbálhatunk zenei felfogásukból meríteni!`
		}
	},
	{
		id: 3,
		name: 'swing',
		content: {
			name: 'Spring Swing',
			difficulty: 5,
			img: PICTURE_13,
			link: 'https://www.youtube.com/watch?v=ASosCYv1rZ4',
			text: `Izgalmas világot képvisel a '30-as években elterjedő manouche swing, melynek leghíresebb alakja Django Reinhardt volt. Mivel ez a stíluság még manapság is virágzik, ill. elemeit a modern jazzben is megtalálni, mindenképp érdemes foglalkozni vele néhány téma erejéig. Ismertetőjegyei közé tartozik a gyors, lüktető akkordkíséret, az izgalmas, megcsavart szólójáték - és persze az akusztikus gitár! Egy másik stílus másféle elemekkel: >> spanyolos téma`
		}
	},
	{
		id: 4,
		name: 'jazz gyaki',
		content: {
			name: 'Jazz walkin',
			difficulty: 3.67,
			img: PICTURE_14,
			link: 'https://www.youtube.com/watch?v=qNKtXiJ_Mfw',
			text: `A modern jazz előszeretettel használ akkordszólókat, ami egy-egy téma vagy standard önálló kibontását jelenti, olyakor hangszerelés nélkül is. Legtöbbször az alapkör harmóniái és a hozzáillő dallamok vagy improvizációk egy szólamban bontakoznak ki. Egyik megközelítése gitáron pl. a walking bass alapú játék, melynek nagy ikonja Joe Pass. Egyszerűbb akkordkörökben kezdhetünk ismerkedni a különböző technikák eszköztárával, majd később teljes standardekre ültethetjük át őket! (Akkordkör: C. Parker-Donna Lee)`
		}
	},
	{
		id: 5,
		name: 'blues lickek',
		content: {
			name: 'Highway blues',
			difficulty: 1.34,
			img: PICTURE_15,
			link: 'https://www.youtube.com/watch?v=uoAkxf8XIx4',
			text: `Kezdő gitárosoknál igen hasznos, ha begyakorolnak egypár gyakran használt licket, ami alapjául szolgálhat az első improvizációknak. Ha ezek az elemek már kézben vannak és szépen is szólnak, át lehet formálni őket ízlés szerint, majd később saját ötletekkel megtűzdelni, ill. felépíteni belőlük egy-egy teljes szólót. Minden ujjrendnek megvannak a sajátosságai, ezért az összes fekvésben otthonosan kell mozognunk, ill. biztosan kell tudnunk "közlekedni" közöttük!`
		}
	}
]

const EXAMPLE_TECH_THEORY_CONTENT = [
	{
		id: 1,
		name: 'neoclassic',
		content: {
			name: 'Neoclassic-arpeggio',
			difficulty: 5,
			img: PICTURE_16,
			link: 'https://www.youtube.com/watch?v=vBoAziBA16Q',
			text: `A modern szólózás fontos tényezője a tempó és a különböző technikai elemek. Ezt ma már nem lehet, és nem is érdemes megkerülni. Hamar beleunhatunk azonban a száraz, öncélú, izolált skálázásokba, ezért jóval hasznosabb olyan gyakorlatokkal foglalkozni, amik afféle etüd-ként funkcionálnak, élvezetesek, és az élő zenében is könnyedén és értelmesen alkalmazhatjuk őket. Jelen példában pl. a háromhúros arpeggio-kon ötletelünk egy metálos témába ágyazva..`
		}
	},
	{
		id: 2,
		name: 'tapping',
		content: {
			name: 'Clouds-tapping',
			difficulty: 2.6,
			img: PICTURE_17,
			link: 'https://www.youtube.com/watch?v=zhtx5ty4UEs',
			text: `Érdekes elem egy-egy szólóban a tapping-technika. Ezekkel olyan motívumokat tudunk alkotni, amiket pengetéssel nem, vagy csak nehezen tudnánk megvalósítani. Ebben az etüd-ben néhány alap tapping-formát gyakorolhatunk többféle variálással: triolás, tizenhatodos osztásban, a bal- és jobbkéz mászkálásával, ill. egy-egy pengetés beszúrásával. Később teljes szólókba ágyazva, ill. komplexebb figurákban is viszontlátjuk még őket..`
		}
	},
	{
		id: 3,
		name: 'tremolókar',
		content: {
			name: 'City lights-tremolós',
			difficulty: 3.4,
			img: PICTURE_18,
			link: 'https://www.youtube.com/watch?v=ASosCYv1rZ4',
			text: `Néhány elektromos gitáron lehetőség van tremolókar használatára, amivel feldobhatjuk, színesíthetjük szólóinkat vagy riffjeinket. Több fajta termolórendszer létezik, és persze sokféle technika is, amelyből itt most néhány finomabb elemmel kísérletezünk. Figyeljük meg, milyen érdekes hangulatot kölcsönöz a karozás egy-egy dallamnak, vagy akár csak egyetlen hangnak! Ötletesen használva nagyszerű kiegészítő..`
		}
	},
	{
		id: 4,
		name: 'tercpárhuzam',
		content: {
			name: 'Tercpárhuzam',
			difficulty: 2.5,
			img: PICTURE_19,
			link: 'https://www.youtube.com/watch?v=qNKtXiJ_Mfw',
			text: `Milyen lehetőségeink vannak, ha egy dallamot/riffet többszólamúvá szeretnénk varázsolni? Hogy csinálják a nagyok? Milyen hangközökkel érdekes számolni? Milyen hangokra nem szabad érkeznünk? Mivel dobhatunk fel egy hangszerelést? Kidolgozhatunk példákat, amiből elleshetünk trükköket, megérthetünk módszereket, ötleteket. Ebben a gyakorlatban éppen egy dallamhoz írunk tercpárhuzamot..`
		}
	},
	{
		id: 5,
		name: 'kidolgozás',
		content: {
			name: 'Morning -kidolgozás',
			difficulty: 3.7,
			img: PICTURE_20,
			link: 'https://www.youtube.com/watch?v=uoAkxf8XIx4',
			text: `Az összhangzattani példák (és persze minden más is) természetesen a gyakorlatban a leghasznosabbak. Ehhez a különféle dalok elemzéseiből is nyerhetünk ötleteket - és kidolgozhatunk saját dolgokat is, egy előzetes koncepció alapján. A jelen témában pl. egy előre megírt akkordkört kell dallamosan kiszínezni, ügyesen felépíteni, ahol hangnemet és hangulatot is váltunk. Használhatunk több fekvést, fordítást, behozhatunk mellékfokokat, és még sok minden mást is, amivel megdolgoztathatjuk kreativitásunkat..`
		}
	}
]

const EXAMPLES_METAL = {
	id: 'metal',
	name: 'Rock/Metal',
	link: 'examples/metal',
	text: EXAMPLES_METAL_TEXT,
	content: EXAMPLE_METAL_CONTENT
}

const EXAMPLES_FUNK_POP_ACU = {
	id: 'funk-pop',
	name: 'funk/pop/aku',
	link: 'examples/funk-pop',
	text: EXAMPLES_FUNK_POP_ACU_TEXT,
	content: EXAMPLE_FUNK_POP_ACU_CONTENT
}
const EXAMPLES_BLUES_JAZZ = {
	id: 'blues-jazz',
	name: 'blues/jazz',
	link: 'examples/blues-jazz',
	text: EXAMPLES_BLUES_JAZZ_TEXT,
	content: EXAMPLE_BLUES_JAZZ_CONTENT
}
const EXAMPLES_TECH_THEORY = {
	id: 'tech-theory',
	name: 'technika/elmélet',
	link: 'examples/tech-theory',
	text: EXAMPLES_TECH_THEORY_TEXT,
	content: EXAMPLE_TECH_THEORY_CONTENT
}

export type ExampleKeys = 'metal' | 'funk-pop' | 'blues-jazz' | 'tech-theory'

export const EXAMPLES_CONTENT: {
	[key in ExampleKeys]: typeof EXAMPLES_METAL
} = {
	metal: EXAMPLES_METAL,
	'funk-pop': EXAMPLES_FUNK_POP_ACU,
	'blues-jazz': EXAMPLES_BLUES_JAZZ,
	'tech-theory': EXAMPLES_TECH_THEORY
}

export const EXAMPLES_MAIN_CONTENT: {
	filters: {
		id: string
		link: string
		text: string
	}[]
	link: { href: string; text: string }
	textContent: DocType
	title: string
} = {
	title: 'Gitároktatás - videók',
	link: {
		text: 'info és jelentkezés',
		href: '/classes'
	},
	textContent: {
		type: 'doc',
		content: [
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text:
							'Gyakorlásunk részei lehetnek a modern könnyűzene különféle stíluságaiból származó dalok, témák, szólók, stb., vagy akár különböző stílusgyakorlatok is - utóbbiakból tekinthető meg néhány ezen az oldalon.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						marks: [{ type: 'bold' }],
						text: 'Minden teljesen személyre szabott'
					},
					{
						type: 'text',
						text:
							', gyakorlatközpontú, a feladatokat aktuális szinthez és szorgalomhoz mérten közösen állítjuk össze.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						marks: [{ type: 'bold' }],
						text: 'Igazodom az igényekhez'
					},
					{
						type: 'text',
						text:
							', mert a célok mindenkinél mások, így a fő irányt a te ízlésed felé orientáljuk.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						text:
							'Ha inkább a tábortűzi slágerek vonzanak, nem terhellek felesleges témákkal, ez is teljesen rendben van.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						text: 'Szem előtt tartom, hogy a kívánalmaidhoz mérten minél több '
					},
					{
						type: 'text',
						marks: [{ type: 'bold' }],
						text: 'sikerélményt'
					},
					{
						type: 'text',
						text:
							' szerezz - ezzel segítve a gyakorlásokra való ráhangolódást, a kitartást, szorgalmat - amihez persze a Te hozzáállásod is fontos :-)'
					},
					{
						type: 'hardBreak'
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Teljesen kezdőkkel és haladókkal is szívesen, ill. nagy '
					},
					{
						type: 'text',
						marks: [{ type: 'bold' }],
						text: 'türelemmel és rutinnal'
					},
					{
						type: 'text',
						text: ' foglalkozom.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						text:
							'A dalok, darabok-témák önmagukban gazdagok különféle technikai megoldásokban, így nem szükséges bevetni száraz és élvezhetetlen ujjgyakorlatok tömkelegét. A méltán híres zenekarok-zenészek dalait is ezek mentén válogatjuk össze.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						text: 'Emellett nem árt, ha értjük is, amit játszunk, így az '
					},
					{
						type: 'text',
						marks: [{ type: 'bold' }],
						text: 'elméleti hátteret és információkat'
					},
					{
						type: 'text',
						text:
							' is beleszőhetjük a darabok, dalok közé - mégpedig úgy, hogy ne terhet, hanem '
					},
					{
						type: 'text',
						marks: [{ type: 'bold' }],
						text: 'hasznos eszközt lássunk benne'
					},
					{
						type: 'text',
						text: ', ami segítségünkre van.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						text: 'A hallás fejlesztésére is figyelmet fordíthatunk.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						marks: [{ type: 'bold' }],
						text: 'Mindig zenei alappal gyakorolunk'
					},
					{
						type: 'text',
						text:
							', vagy együtt játszva, vagy backing track-re. Tabokat/kottákat, videókat, elméleti részt, egyéb segédanyagokat minden alkalommal biztosítok.'
					},
					{
						type: 'hardBreak'
					},
					{
						type: 'text',
						text:
							'A lenti videókat stílusok szerint válogattam össze. Kezdő és haladó témák egyaránt találhatók köztük.'
					}
				]
			}
		]
	},
	filters: [
		{
			id: EXAMPLES_METAL.id,
			link: EXAMPLES_METAL.link,
			text: EXAMPLES_METAL.name
		},
		{
			id: EXAMPLES_FUNK_POP_ACU.id,
			link: EXAMPLES_FUNK_POP_ACU.link,
			text: EXAMPLES_FUNK_POP_ACU.name
		},
		{
			id: EXAMPLES_BLUES_JAZZ.id,
			link: EXAMPLES_BLUES_JAZZ.link,
			text: EXAMPLES_BLUES_JAZZ.name
		},
		{
			id: EXAMPLES_TECH_THEORY.id,
			link: EXAMPLES_TECH_THEORY.link,
			text: EXAMPLES_TECH_THEORY.name
		}
	]
}
