import Image2 from '../Assets/elmik.png'
import Image1 from '../Assets/g1pk.jpg'
import Image3 from '../Assets/hszb4.jpg'

export const VIDEOS_CONTENT = {
	title: {
		text: 'Gitáros és zenei videók',
		subtext: 'Zenei anyagok (nem csak) gitárosoknak!'
	},
	textContent: {
		text:
			'Az alábbi lapon többféle témakörben találhatsz videós anyagokat, a zeneelmélettől kezdve a hasznos gitáros és zenei okosságokon keresztül a különféle játékokig. \nA videókkal közérthető nyelven próbálok átadni rengeteg hasznos tippet és érdekességet, amikkel önállóan fejlesztheted zenei készségeidet.\nA témák folyamatosan bővülnek. Jó böngészést!'
	},
	subPages: [
		{
			id: 1,
			title: 'Gitáros okosságok',
			href: '/videos/vlog',
			text: 'Gitártechnikai és gyakorlási tippek, elemzések, érdekességek, hangszínek...',
			image: {
				src: Image1,
				alt: 'image for the first subpage'
			}
		},
		{
			id: 2,
			title: 'Zeneelmélet és hallás',
			href: '/videos/theory',
			text: 'A zenélés háttere, a "hogyanok és miértek", példák és összefüggések...',
			image: {
				src: Image2,
				alt: 'image for the second subpage'
			}
		},
		{
			id: 3,
			title: 'Havi egy szóló',
			href: '/videos/solo-game',
			text: 'Gitáros játék és kihívás, sokféle zenei alappal, sokféle stílusban...',
			image: {
				src: Image3,
				alt: 'image for the third subpage'
			}
		}
	]
}
