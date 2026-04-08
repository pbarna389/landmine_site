/* eslint-disable sonarjs/no-duplicate-string */
export const VIDEO_CATEGORY_CONTENT: VideoCategoryContentType = {
	vlog: {
		title: {
			text: 'gitáros videók',
			subText:
				'Folyamatosan bővülő videós anyagok, többféle kategóriában - témakörökre bontva. \nNe maradj le a legújabb részekről, iratkozz fel a Youtube-on! ;)'
		},
		content: [
			{
				id: 'PLn5cNXlh5JYNmWSHVLMsA6F_3wNRhaofk',
				title: 'zenei csemegék',
				text: [
					'Gitáros/zenei videók jó zenékkel, jó zenékről, sok gitározással...',
					'Egy kicsit szakmai, egy kicsit személyes...; érdekes, hasznos, vagy épp meglepő témákkal...',
					'Folyamatosan bővülő részekkel...'
				]
			},
			{
				id: 'PLn5cNXlh5JYNJwmXN08v2fKEoC7dwTKWv',
				title: 'technikák',
				text: [
					'Menő szólógitár-technikákkal ismerkedhetsz ebben a sorozatban',
					'Gyakorlási tippek, fincsi figurák, gyakori hibák, példák és szuper gyakorlatok',
					'Tabokkal, zenei alapokkal - kezdőknek is!'
				]
			},
			{
				id: 'PLn5cNXlh5JYPHRBJL_zEBp0TZ7bktfo6Y',
				title: 'gitáros egypercesek',
				text: [
					'Gitártechnikai és gyakorlási tippek (kék videók)',
					'Zeneelméleti apróságok és ötletelések (piros videók)',
					'Elemzések, érdekességek, gitársound, stb.. (sárga videók)'
				]
			},
			{
				id: 'PLn5cNXlh5JYOkBpxQwINbPpTYBdFwn_xD',
				title: 'riffek és akkordmenetek',
				text: [
					'A jó lickek szélesíthetik látókörünket, meglökhetik kreativitásunkat.. Jól esik az agynak, jól esik a kéznek!',
					'Az ötletes riffek és akkordkörök inspirációt nyújthatnak -és még technikailag is fejlesztenek.'
				]
			},
			{
				id: 'PLn5cNXlh5JYP7tqC2WmM6yB86XyK1Crwb',
				title: 'lickek hazai gitárosoktól',
				text: [
					'A jó lickek szélesíthetik látókörünket, meglökhetik kreativitásunkat.. Jól esik az agynak, jól esik a kéznek!',
					'Külföldi témákból...'
				]
			},
			{
				id: 'PLn5cNXlh5JYMDfijriMMmsFTR2MQPFTp0',
				title: 'saját lickek',
				text: [
					'A jó lickek szélesíthetik látókörünket, meglökhetik kreativitásunkat.. Jól esik az agynak, jól esik a kéznek!',
					'Saját témákból...'
				]
			}
		]
	},
	theory: {
		title: {
			text: 'Zeneelmélet és hallás',
			subText:
				'Az alábbi lapon folyamatosan bővülő zeneelméleti anyagokat találsz. \nNe maradj le a legújabb részekről, iratkozz fel a Youtube-on! ;)'
		},
		content: [
			{
				id: 'PLn5cNXlh5JYOK0qIXqaZz0LsQ0zHpK30U',
				title: 'Zeneelméleti videók',
				text: [
					'Zeneelméleti látókör-szélesítés, ötletelések nem csak gitárosoknak.',
					'Ha érdekel a háttér, a "hogyanok és miértek", ne hagyd ki!',
					'Folyamatosan bővülő videók az önálló és kreatív gyakorláshoz'
				]
			},
			{
				id: 'PLn5cNXlh5JYP_qrnVQGcRtylKSUVF5AOU',
				title: 'improvizálás',
				text: ['Improvizációs tippek és témák nem csak gitárosoknak.']
			},
			{
				id: 'PLn5cNXlh5JYMEgspuw_Ns5tqzHOF0zCro',
				title: 'zeneírás',
				text: ['Zeneírós kulisszatitkok, inspiráció, hangszerelés, otthoni felvételkészítés.']
			}
		]
	}
}

type VideoCategoryContentType = {
	[key: string]: {
		content: {
			id: string
			text: string[]
			title: string
		}[]
		title: {
			subText: string
			text: string
		}
	}
}
