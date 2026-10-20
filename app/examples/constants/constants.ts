import type { DocType } from '@/types'

export const EXAMPLES_MAIN_CONTENT: {
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
	}
}
