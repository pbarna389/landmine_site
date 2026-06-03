/* eslint-disable sonarjs/no-duplicate-string */
import EarlyImage01 from '../public/2003bor.jpg'
import EarlyImage02 from '../public/2004bor.jpg'
import EarlyImage03 from '../public/2006bor.jpg'
import EarlyImage04 from '../public/2008bor.jpg'
import EarlyImage05 from '../public/2009bor.jpg'
import EarlyImage06 from '../public/2010bor.jpg'
import MiddleImage01 from '../public/2011bor.jpg'
import MiddleImage02 from '../public/2012bor.jpg'
import MiddleImage03 from '../public/2017bor.jpg'
import MiddleImage04 from '../public/2017EPbor.jpg'
import MiddleImage05 from '../public/2018bor.jpg'
import MiddleImage06 from '../public/2020bor.jpg'
import NewEraImage01 from '../public/bori21.jpg'
import NewEraImage02 from '../public/bori22bl.jpg'
import NewEraImage03 from '../public/bori22ineffable.png'
import NewEraImage04 from '../public/bori22knew.png'
import NewEraImage05 from '../public/bori22wild.jpg'
import NewEraImage06 from '../public/bori24.jpg'

export const MUSIC_CATEGORY_CONTENT = {
	title: 'Albumok - zenék',
	textContent:
		'2002 óta írogatok instrumentális, ill. újabban énekes zenéket is, melyek albumos elrendezésben meghallgathatók ezen a lapon.\nMinden "lemez" egy-egy kísérlet, így stílusilag különbözőek - habár egy egységesség, egy sajátos megközelítés mégis végigvonul rajtuk.\nSzületett már jazzes, metálos, prog. rockos, vagy meditatívabb album is, sokféle hangszereléssel, indíttatással, érzésvilággal.\nJó mazsolázást ;-)',
	eras: [
		{
			id: 1,
			title: 'early years',
			content: [
				{
					id: 'early-record-01',
					title: 'landmine1-demo',
					format: 'demo',
					releaseDate: 2003,
					style: 'instrumental rock',
					image: EarlyImage01,
					href: 'https://youtu.be/dTA_LZfXpNU',
					details:
						'Legelső szerzeményeim, mintegy másfél év gitározás után; amolyan instrumentális gitárzene, az akkori kedvenceim nyomán... A hibák és hiányosságok ellenére igyekeztem a dallamosságot és a technikás játékot egyensúlyban tartani.'
				},
				{
					id: 'early-record-02',
					title: 'Az új hitvallás / The New Creed',
					format: 'LP album',
					releaseDate: 2004,
					style: 'Progressive rock/metal',
					image: EarlyImage02,
					href: 'https://youtu.be/RirCixD6sxA',
					details:
						'A legelső teljes album, amin kb. fél évig dolgoztam. A hangzás eléggé nyers és amatőr még, akkoriban nem volt túl sok lehetőség... Zeneileg -az első demó után- jóval eklektikusabbá vált a muzsika, sokféle stíluselem keveredik, valamint színesebb, ötletesebb a kidolgozás - bár a rengeteg téma és a néhol eltúlzott komplexitású dalszerkezetek meglehetősen nehézzé tették a befogadást. A fiatalos hév ellenére azért születtek jó témák és hangulatok ezen a jó emlékekkel teli lemezen.'
				},
				{
					id: 'early-record-03',
					title: 'Eszmék hirdetése / Declaring the notions',
					format: 'LP album',
					releaseDate: 2006,
					style: 'Progressive rock/metal',
					image: EarlyImage03,
					href: 'https://youtu.be/zpXEl4DEjEI',
					details:
						'A 2004-es lemez után sok változás történt, ami az akkori tanulmányaimnak és zenei fejlődésemnek tudható be. Jóval célratörőbb dalszerkezetekre váltottam, ill. a karakteresebb témákra, izgalmasabb hangszerelésekre (akár trió, akár big band) fektettem hangsúlyt. A hangzás sajnos még mindig nem túl erős; zeneileg viszont történt némi elmozdulás, mégpedig jazzes, jazzrock-os irányba. Egy év alatt készült el az album.'
				},
				{
					id: 'early-record-04',
					title: 'Egy tél a vad természet mélyén / A winter in the depths of the wild nature',
					format: 'EP',
					releaseDate: 2008,
					style: 'Symphonic metal',
					image: EarlyImage04,
					href: 'https://youtu.be/02PoMXFC2FU',
					details:
						'Ezúttal -a múltbéli Before Dawn project után ismét- metálosabb irányba indultam pár művecske erejéig, annál tisztább hangzással, érettebb ötletekkel és kivitelezéssel. Három különböző karakterű dal született végül, melyekben az ötletes témákra, a hangulatra ill. hangszerelési finomságokra fekettem hangsúlyt (szimfonikus szekció, riffek többszólamúsága, stb).\nKészült: 2008. augusztusa és szeptembere között.'
				},
				{
					id: 'early-record-05',
					title: 'Az ősi élmények megtapasztalása / Experiencing the ancient experiences',
					format: 'LP album',
					releaseDate: 2009,
					style: 'Progressive rock',
					image: EarlyImage05,
					href: 'https://youtu.be/Nf2cnzscW-k',
					details:
						'Egy színes palettájú, gyorsan összeállt lemez: három hónap alatt írtam és vettem fel. Már nem törekedtem arra (mint az ezt megelőző albumoknál), hogy mindent belerakjak, amit csak tudok; mindössze jó dalokat szerettem volna írni, amelyeknek saját karakterük és hangulatuk van. A munkamódszer felölelte az eddigi cd-knél tapasztaltakat, de erről inkább beszéljenek helyettem a művek :)'
				},
				{
					id: 'early-record-06',
					title: 'A tudat ébredése / The Awakening Of Consciousness',
					format: 'LP album',
					releaseDate: 2010,
					style: 'Metal',
					image: EarlyImage06,
					href: 'https://youtu.be/fq8Hru76VIg',
					details:
						'Szikárabb, metálosabb irányba kalandoztam ezen a lemezen.\nEgyfajta sajátos teremtéstörténet megzenésítve... a súlyos, ám érzékeny hangulatok, a kemény riffek mellett komolyzenei hatások és megoldások jellemzik a tételeket, melyekben végigvonul egy folyamatos átalakulás.'
				}
			]
		},
		{
			id: 2,
			title: 'middle ages',
			content: [
				{
					id: 'middle-record-01',
					title: 'Kozmikus ima / Cosmic prayer',
					format: 'LP album',
					releaseDate: 2011,
					style: 'Progressive rock',
					image: MiddleImage01,
					href: 'https://youtu.be/lUUylSMVo_U',
					details:
						'Ez az album fontos állomása zenei utamnak, egy átalakulás és érés eredménye. Egyben tudatos szembefordulás is korunk általános zenei megközelítéseivel, vagy akár a szakmai-intellektuális fokmérőkkel. Egy spontán, talán kissé különös anyag, afféle pszicho-zene. Néhol még a hagyományos dallamok és felépítések is mellőzve vannak, vagy háttérbe szorulnak, hogy a tartalom az elmét megkerülve közvetlenül érhessen tudatalatti mélységekbe...'
				},
				{
					id: 'middle-record-02',
					title: 'Maszkabál szimfónia / Masquerade Symphony',
					format: 'LP album',
					releaseDate: 2012,
					style: 'Progressive rock/metal',
					image: MiddleImage02,
					href: 'https://youtu.be/_cQKyseveYc',
					details:
						'Az elmúlt évtized munkásságának összefoglalása és eredménye ez a kis rock-szimfónia, érettebb témákkal és dalokkal, ill. élvezhetőbb hangzással.\n A nyitány szemelvény az egyes dalok témáiból, dallamaiból, melyek a tételekben különféleképpen kibontásra kerülnek. A dalszerkezetek némileg összetettek, de következetesek; a témák, hangulatok egymásba szövődnek.'
				},
				{
					id: 'middle-record-03',
					title: 'Egy végtelen év az elmúlásban / An endless year in the passing',
					format: 'LP album',
					releaseDate: 2017,
					style: 'Progressive/ambient rock',
					image: MiddleImage03,
					href: 'https://youtu.be/yC8giY2cLoE',
					details:
						'Négy évnyi kihagyás után kezdtem írni ezt az albumot. Csupán egy-egy apró sugallattal álltam neki az egyes daloknak, és menet közben bomlott ki minden, mondhatni önmagától. A dalszerkezetek teljesen letisztultak, egyszerúek: csak az ötleti részek, a főtémák- és dallamok vannak jelen, minden más (technikai ügyességek, szólók, stb) szándékosan mellőzve lett - így előtérbe kerülhettek a hangulati szférák, ill. a zene időtlenebb aspektusai.\nStílusilag és hangzásban egységesebb lett az anyag, mint az előző lemezeknél. Ezúttal még szintit sem használtam, minden részlet, hangulatfokozó elem gitárral, effektekkel és basszussal készült. A dalok -címeikkel ellentétben- nem az egyes hónapokat próbálják lefesteni; csupán személyes lenyomatokat, kötődéseket hordoznak.'
				},
				{
					id: 'middle-record-04',
					title: 'Képzelt élet / Imagined life',
					format: 'EP',
					releaseDate: 2017,
					style: 'Guitar instru rock',
					image: MiddleImage04,
					href: 'https://youtu.be/OfAUbFQmoqs',
					details:
						'Mivel az előző albumon inkább a mélyebb, hangulati szférákra helyeződött hangsúly, itt kedvet éreztem egy kis lazulós, karcos, gitározós anyaghoz. Maradt továbbra is a dalközpontúság, nem az öncélú technikai virításokról (de nem is épp az eredetiségről) szól a zene.\nNapló... Három dalhoz "guitar playthrough" videó is készült, zöld-hátteres technika alkalmazásával, több-kevesebb sikerrel.. :)'
				},
				{
					id: 'middle-record-05',
					title: 'Egy éjjel az ódon házban / Night in the archaic house',
					format: 'EP',
					releaseDate: 2018,
					style: 'Jazz/jazzrock',
					image: MiddleImage05,
					href: 'https://youtu.be/7n2yu0fog10',
					details:
						'Egy kis kitérőt tettem ezúttal, 3 új dalocska született jazz/jazzrock vonalon. Egyszemélyes project lévén a felvételek során folyamatosan formálódott az aktuális változat, mindig utána igazítva a dobrészleteknek (is) a dinamikai váltakozások fenntartásának érdekében.\nEgyúttal új hangszerekkel is dolgoztam, így ez az anyag duplán lett kísérletezős. Mindez trio hangszerelésben - ill. az utolsó dalba már zongora is került.'
				},
				{
					id: 'middle-record-06',
					title: 'Akusztikus sodródás / Acoustic drifting',
					format: 'EP',
					releaseDate: 2020,
					style: 'Acoustic (piano & guitar)',
					image: MiddleImage06,
					href: 'https://youtu.be/IGDR7vZj2iQ',
					details:
						'Összegyűlt néhány dalnyi "mondanivalóm", akusztikus hangszerelésben, zongorára és gitárra. Akad köztük kifejtősebb, összetettebb szám, ill. néhány hangulatfestő tétel is.\nA főtémák ezúttal leginkább zongorán íródtak, és a hangszerelés közben formálódtak ki a gitársávok.'
				}
			]
		},
		{
			id: 3,
			title: 'the new era',
			content: [
				{
					id: 'new-era-record-01',
					title: 'Az összes világ mögött / Behind all the worlds',
					format: 'EP',
					releaseDate: 2021,
					style: 'Progressive rock',
					image: NewEraImage01,
					href: 'https://youtu.be/1wXHEs3Qbgg',
					details: `Először készült végig énekes anyag, melyben kedvenc dark prog rock stílusom felé kanyarodtam. Nagy élmény volt elkészíteni, igen hamar össze is állt.\nZeneileg a '60-70-es évek gondolkodását kevertem modernebb megközelítésekkel. A dalok viszonylag összetettek, mind témákban, mind hangszerelésben, és többféle dalszerkezet is van, de követhető, élvezhető módon.\nHangzásban is próbáltam előrelépni, finomítani, minél inkább belemenni a részletekbe. Szándékosan mellőztem a ma divatos döngölős metal-soundokat, a gitárokat lazábbra, "kráncsosabbra", organikusabbra állítottam, így tisztábban kijönnek az akkordok, dinamikák. Több lett az akusztikus gitár is. A basszusnak is saját karaktere lett, saját szólamokkal; a szintiszőnyegek és gitárutánzó lead-ek helyett klasszikus hammondot és mellotront használtam csupán. A dobok is kidolgozottabbak lettek.\nHangulatilag kissé rejtőzködőbb, kevésbé teátrális és evidens a zene. Az instru részekbe többféle hatást, utalást is belecsempésztem. A szövegekkel hangulatokat próbáltam megfesteni, néhol kontrasztosan, máshol kifejezőbben. Az énekkel természetesen lesz még hová fejlődnöm a későbbiekben :)`
				},
				{
					id: 'new-era-record-02',
					title: 'A pogány természet maradványai / Remains of the pagan nature',
					format: 'EP',
					releaseDate: 2022,
					style: 'Black metal',
					image: NewEraImage02,
					href: 'https://youtu.be/YCpauKPZb4g',
					details: `Egy hangszín-tesztelés során születtek az első dal főtémái, míg végül felmerült bennem, hogy miért ne rakhatnék össze néhány számot ebben a -számomra- szokatlanabb műfajban is..? Ahogy elmerültem kissé a stílusban, egyből éreztem, hogy a műfajbeli kötöttségek mellett milyen nehéz is karakteres témákat és dalokat írni. Így ez egy szép kihívás és érdekes kísérlet is lett egyúttal - és még a vokált is bevállaltam.. :)\nStílusilag persze kalandoztam erre-arra, az első dal tipikus gyorstempós, a második punkosabb itt-ott, tehát amolyan ős-black, míg a harmadik doomosan indul, némi skandináv death-hatással.`
				},
				{
					id: 'new-era-record-03',
					title: 'A pogány természet maradványai / Remains of the pagan nature',
					format: 'EP',
					releaseDate: 2022,
					style: 'Soft instrumental',
					image: NewEraImage03,
					href: 'https://youtu.be/3JeEPE1XIro',
					details: `Ez egy szellősebb, halkan lélegző anyag, finomabb gitárzene, kissé melankolikus ízzel. Se torzított gitárok, se komolyabb jazzes harmóniafűzések nincsenek, így aztán stílusilag is nehézkes behatárolni. Témája a változás, elmúlás.\nHangszerelése, dallamvilága is egyszerű, akárcsak a dalszerkezetei. Leginkább merengős háttérzenének való, ahol a figyelemnek nem kell fókuszálnia, így a háttérben tud hangulatilag megérinteni.`
				},
				{
					id: 'new-era-record-04',
					title: 'Egy álom, amit ismertem / A dream I knew',
					format: 'EP',
					releaseDate: 2022,
					style: 'Psychedelic blues rock',
					image: NewEraImage04,
					href: 'https://youtu.be/3HMzHUV-zgY',
					details: `Az EP főszereplője a stratocaster és booster-es hangzás, ennek megfelelően tele van apró finomságokkal, sok dinamikával. A zenei irány leginkább bluesrock vonal, melybe psychedelic hatásokat is csempésztem (főként a záró tételbe). A dalok így legalább annyira idézik meg a hagyományokat, mint amennyire próbálnak elegyíteni, kísérletezni.\nA hosszabb, történetmesélős szólók elmerülősebbek lettek, ill. próbáltam fejlődni éneklés tekintetében is...`
				},
				{
					id: 'new-era-record-05',
					title: 'Vad rituálék / Wild rituals',
					format: 'EP',
					releaseDate: 2022,
					style: 'Progressive rock/metal/fusion',
					image: NewEraImage05,
					href: 'https://youtu.be/w9yy_k75r0k',
					details: `Technikás, kimunkált muzsika hallható ezen az EP-n, visszanyúlván prog-metalos gyökereimhez. Noha ez a stílus inkább a zenészfüleknek lehet vonzóbb, azért próbáltam nem túllőni; befogadhatóbb, dallamosabb témákban gondolkodtam, ill. a kényszerességet is igyekeztem visszafogni (virga szólók, agymenések, stb).\nMinden hangszernek egyforma szerep jut, tehát nem kimondottan gitáros aggyal írtam a dalokat. Olyan összetett kompozíciók születtek, amelyekben a különféle stílusú téma-és hangulatváltások ügyesen egymásba szövődnek, de zeneileg is izgalmas és progresszív marad az összkép.\nA hangzáson is sokat dolgoztam és a dobok és billentyűs szólamok megírására is külön hangsúlyt fektettem.`
				},
				{
					id: 'new-era-record-06',
					title: 'Észrevétlen pillanatok / Unnoted moments',
					format: 'EP',
					releaseDate: 2024,
					style: 'Dark pop/ambient',
					image: NewEraImage06,
					href: 'https://youtu.be/c-C4tmq8woY?si=bsueizIAlFsK83wI',
					details: `Régóta tervben volt egy ilyen anyag, amolyan 'festészet zenével', hangulatilag elmerülős, lebegős-mélabús mellékízzel. Zeneileg kissé minimál, mégis rétegzett: rengeteg finomság jellemzi, főként hangszerelés és effektezés terén. Gitár helyett ezúttal billentyűs hangszínek dominálnak, némi "elektronikával" fűszerezve. A szövegekben apró, észrevétlen, mégis egyénileg jelentős pillanatképek és hangulatok elevenednek meg. A legtöbb időt a hangszínek keresgélése és összecsiszolása vitte el; maguk a dalok igen gyorsan megszülettek (általában egy-egy dob groove-ból indultam ki).`
				}
			]
		}
	]
}
