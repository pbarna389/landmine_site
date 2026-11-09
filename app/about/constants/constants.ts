import type { DocType } from '@/types'

import Image1 from '../Assets/tomm.jpg'

const PROFILE_TEXT_CONTENT: DocType = {
	type: 'doc',
	content: [
		{
			type: 'paragraph',
			content: [
				{
					type: 'text',
					text: `Valamikor a '80-as évek elején öltöttem testet Budapest városában - és alighanem eme esemény az elindítója zenei utamnak is, lévén a sors két kézzel és tíz ujjal ajándékozott meg, amik éppen elegendőek a közelemben lévő hangszerek megszólaltatásához. S bár mindezen adottságokkal már csecsemőkoromban is rendelkeztem, mégis el kellett vesztegetnem vagy 7 évet, mire az egyik állami zeneiskola zongoratanára végre kezelésbe vett, és megtanított a zenei nyelv alapjaira.`
				}
			]
		},
		{
			type: 'paragraph',
			content: [
				{
					type: 'text',
					text:
						'Néhány esztendő után úgy véltem, hogy egy kis váltás nem árthat, így egy érdi hangszerboltban mellém szegődött egy vajszínű elektromosgitár - s később méltó utódja, a fekete cápa, aminek onnantól igencsak gondját viseltem. Az én utamat pedig néhány gitáros úr egyengette aztán módfelett, akik elláttak mindenféle útravalóval, és beavattak a hangszer rejtelmeibe.'
				}
			]
		},
		{
			type: 'paragraph',
			content: [
				{
					type: 'text',
					text:
						'Jópár év kemény gyakorlással és tanáraim segítségével belemélyedtem a gitározás mikéntjébe, majd saját lábamra állván fejlesztettem magam tovább és tovább. Minden újdonság és zenei világ érdekelt és vonzott, amivel csak találkoztam. Volt metál korszakom, voltak jazzes éveim, és még sok más is.. Elkezdtem zenekarozni is, bár közben letisztult bennem, hogy inkább a zene kreatív/kísérletezős/alkotós oldala vonz, mintsem a színpad. És persze az is, hogy az én terepem a tanítás - s nem a zenészkarrier. "Aki tudja, csinálja, aki nem, tanítja" ;)'
				}
			]
		},
		{
			type: 'paragraph',
			content: [
				{
					type: 'text',
					text: '2002 óta folyamatosan írok '
				},
				{
					type: 'text',
					marks: [{ type: 'bold' }],
					text: 'zenéket'
				},
				{
					type: 'text',
					text: ', '
				},
				{
					type: 'text',
					marks: [{ type: 'bold' }],
					text: 'tananyagokat'
				},
				{
					type: 'text',
					text: '; pár éve különféle zenei videókat is készítek ('
				},
				{
					type: 'text',
					marks: [{ type: 'bold' }],
					text: 'onine videók'
				},
				{
					type: 'text',
					text: ', '
				},
				{
					type: 'text',
					marks: [{ type: 'bold' }],
					text: 'cikkek'
				},
				{
					type: 'text',
					text: ', '
				},
				{
					type: 'text',
					marks: [{ type: 'bold' }],
					text: 'közösségi játékok'
				},
				{
					type: 'text',
					text: ', '
				},
				{
					type: 'text',
					marks: [{ type: 'bold' }],
					text: 'onine videók'
				},
				{
					type: 'text',
					text: ' stb.) - illetve 2005 óta foglalkozom '
				},
				{
					type: 'text',
					marks: [{ type: 'bold' }],
					text: 'gitároktatással'
				},
				{
					type: 'text',
					text:
						' ahol igyekszem átadni mindazt az örömet, amit a zenélés adhat, mindazt a hátteret, ami a zene élvezetéhez vezet el.'
				}
			]
		}
	]
}

export const PROFILE_CONTENT = {
	profileContent: {
		textContent: {
			title: {
				text: 'adatlap'
			},
			text: PROFILE_TEXT_CONTENT
		},
		profileInfo: {
			title: { text: 'számokban' },
			image: {
				src: Image1,
				alt: 'Gyenes Attila, gitártanár'
			},
			content: [
				{
					title: 'tanítási rutin',
					text: '20 év'
				},
				{
					title: 'megtartott órák',
					text: '21 ezer'
				},
				{
					title: 'tanított dalok',
					text: '550 dal'
				},
				{
					title: 'egyéb témák',
					text: 'számtalan... :)'
				}
			]
		}
	}
}
