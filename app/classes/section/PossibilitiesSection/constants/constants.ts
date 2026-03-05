import Image6 from '../Assets/classroom2.webp'
import Image3 from '../Assets/fendi.webp'
import Image5 from '../Assets/gyaki.webp'
import Image4 from '../Assets/gyaki2.webp'
import Image1 from '../Assets/kp1_t.png'
import Image2 from '../Assets/kp2_t.png'

export const POSSIBILITIES_CONTENT = {
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
	info: [
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
			text:
				'... egy általános alapozás közben máris zenélve tanulhatsz: a különböző alapgyakorlatok ill. ízlés szerint válogatott egyszerűbb dalok magukban foglalják a modern könnyűzene alapvető elemeit, fogásait is...\n Az órák teljesen dalközpontúak, hiszen a hobbi-zenélésben a sikerélmény és a zenélés örömei a legfontosabbak. Ezzel párhuzamosan az elmélet alapjait is érinthetjük, velősen, lényegre törően, hogy ne teherré, hanem hasznos segédünkké váljon. \n Kezdetben a hangszer alapos megismerése és megszeretése a lényeg. Hogy örömmel ülj le gitározni, hogy láss összefüggéseket, hogy önállósodj. A tanulás menetét, folyamatát igényeid szerint aktívan alakíthatod -én ebben leszek a partnered. \n Akár az otthoni zeneszerkesztés- és felvétel praktikáit is érinthetjük..',
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
			text:
				'... amolyan műhelymunka-szerűen különböző karakterű darabokkal foglalkozhatunk. A komolyabb témákon keresztül fejlődhet a technikád, mindset-ed, játékod zeneisége és kreativitásod, egyéniséged is; könnyebben ráláthatsz összefüggésekre, vagy épp az együtt-zenélés bizonyos elemeire (kinek mire van szüksége)...\n A fenti gyakorlások mellett a megértés is fontos elem - gyakorlatban alkalmazni az elméletet, belelátni különféle stílusokba, megközelítésekbe, ill. az improvizálás és zeneírás eszközeinek elméleti és gyakorlati lehetőségeibe - ízlés szerint. Nem "csak" gitározni tanulunk, hanem zenélni is; megismerhetünk gondolkodásmódokat, tágíthatjuk a látókört... \n A folyamatos, személyes kontakt szintén nagyon hasznos: bármilyen kérdést, ill. felmerülő problémás részt megoldhatunk, átbeszélhetünk közösen.',
			link: {
				text: 'gitároktatás-videók',
				href: null
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
				alt: '',
				caption: 'klásszrúm - a gitárorákulum-hely :)'
			},
			text:
				'... a klasszikus slágerektől- a jazz-en, blues-on, funky-n át -a modern pop/rock/metálzenéig sok minden teret kaphat - mindez rugalmasan az ízlésedhez, igényeidhez igazítva: legyen akár teljes dal, egy téma, egy szóló, vagy épp egy-egy hasznos, fejlesztő stílusgyakorlat a könnyűzene különféle stíluságaiból.. Így egy igen színes és élvezetes, de ezzel együtt komoly repertoárból csemegézhetünk -elképzeléseidet szem előtt tartva. \n Kedvenc, hozott dalokat ugyanúgy tanulunk, nincs zeneiskolai kötöttség. Nem szokásom erőltetni az unalmas, öncélú, dallamtalan technikai gyakorlatokat sem, az igazi zenéléshez amúgy sem ez a megfelelő út. \n Akusztikus- és elektromosgitáron egyaránt zenélhetünk, szívesen és nagy türelemmel foglalkozom teljesen kezdőkkel és haladókkal is. Az órák egyéniek, nem csoportosak, és teljesen személyre szabottak (az aktuális szinthez, szorgalomhoz, saját céljaidhoz igazodnak).',
			link: {
				text: 'studio-képek',
				href: null
			}
		}
	]
}

export type PossibilitiesBodyType = (typeof POSSIBILITIES_CONTENT)['content']['body']
export type PossibilitiesDetailsType = (typeof POSSIBILITIES_CONTENT)['info']
