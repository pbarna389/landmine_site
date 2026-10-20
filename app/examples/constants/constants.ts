import type { DocType } from '@/types'

import PICTURE_01 from '../assets/along.jpg'
import PICTURE_04 from '../assets/august2.jpg'
import PICTURE_03 from '../assets/choco.jpg'
import PICTURE_05 from '../assets/coffee2.jpg'
import PICTURE_02 from '../assets/shark2.jpg'

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

const EXAMPLE_METAL_CONTENT = [
	{
		id: 1,
		name: 'Klasszik rock',
		content: {
			name: 'Along traditions',
			difficulty: 3.1,
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
			difficulty: 4,
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
			difficulty: 2.2,
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
			difficulty: 3.4,
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
			difficulty: 4.2,
			img: PICTURE_05,
			link: 'https://www.youtube.com/watch?v=QrHyOgzEOKE',
			text: `Akik kedvelik a keményebb stílusokat, azoknak meg kell bírkózniuk a sokszor igen nehéz technikákkal és tempókkal. Ennek érdekében külön megcélozhatjuk ezeket a területeket. Legyen az kemény vagy gyors riffelés, precíz játék, szólók tisztítása, stb., a folyamatosság a kulcstényező. Ha szintenként emeljük a gyakorlási tempókat, a finom mozgások könynebben be tudjanak ivódni, az elemek be tudjanak érni. Azután már bátrabban szembenézhetünk pl. a Metallica, az Extreme, a Tool, az Opeth, vagy épp a gitárhősök (Satriani, Vai) dalaival is!`
		}
	}
]

const EXAMPLES_METAL = {
	id: 1,
	name: 'Rock/Metal',
	link: 'examples/metal',
	text: EXAMPLES_METAL_TEXT,
	content: EXAMPLE_METAL_CONTENT
}

const EXAMPLES_FUNK_POP_ACU = {
	id: 2,
	name: 'funk/pop/aku',
	link: 'examples/funk-pop',
	text: [],
	content: []
}
const EXAMPLES_BLUES_JAZZ = {
	id: 3,
	name: 'blues/jazz',
	link: 'examples/blues-jazz',
	text: [],
	content: []
}
const EXAMPLES_TECH_THEORY = {
	id: 4,
	name: 'technika/elmélet',
	link: 'examples/tech-theory',
	text: [],
	content: []
}

export const EXAMPLES_MAIN_CONTENT: {
	filters: {
		id: number
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
