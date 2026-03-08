import Image1 from '../Assets/sorozatokhtr.jpg'

export const VIDEOS_CONTENT = {
	title: {
		text: 'Gitáros és zenei videók',
		subtext: 'Zenei anyagok (nem csak) gitárosoknak!'
	},
	image: {
		src: Image1,
		alt: 'background-image-for-videos'
	},
	textContent: {
		text:
			'Az alábbi lapon többféle témakörben találhatsz videós anyagokat, a zeneelmélettől kezdve a hasznos gitáros és zenei okosságokon keresztül a különféle játékokig. \nA videókkal közérthető nyelven próbálok átadni rengeteg hasznos tippet és érdekességet, amikkel önállóan fejlesztheted zenei készségeidet.\nA témák folyamatosan bővülnek. Jó böngészést!'
	},
	subPages: [
		{
			title: 'Gitáros okosságok',
			href: './vlog',
			text: 'Gitártechnikai és gyakorlási tippek, elemzések, érdekességek, hangszínek...'
		},
		{
			title: 'Zeneelmélet és hallás',
			href: './elmelet',
			text: 'A zenélés háttere, a "hogyanok és miértek", példák és összefüggések...'
		},
		{
			title: 'Havi egy szóló',
			href: './hetiszolo',
			text: 'Gitáros játék és kihívás, sokféle zenei alappal, sokféle stílusban...'
		}
	]
}
