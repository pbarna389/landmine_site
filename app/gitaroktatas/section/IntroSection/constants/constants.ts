import Image1 from '../Assets/gitarora.webp'
import Image2 from '../Assets/pecset.webp'

export const INTRO_SECTION_CONTENT = {
	header: {
		title: 'Gitároktatás',
		subTitle: 'Budapesten vagy online!'
	},
	textContent: {
		text: 'Gitártanár: Gyenes Attila',
		image: {
			src: Image2,
			alt: 'Barátságos, lendületes személyre szabott órák'
		}
	},
	image: {
		src: Image1,
		alt: 'gitároktatás mindenféle stílusban - info@landmine-gitaroktatas.hu, telefon: 06/30-720-78-78',
		caption: 'Az első órád ingyenes! ;)'
	},
	mobileCarouselContent: [
		{
			header: 'gyakorlat-központú órák',
			text: [
				'a sikerélményért és a zenélés öröméért',
				'barátságos, lendületes órák, klassz dalok, sok gitározás'
			]
		},
		{
			header: 'rugalmas tanmenet',
			text: [
				'közérthetően, lényegretörően, türelmesen',
				'személyre szabott oktatás, mely igazodik az igényekhez'
			]
		},
		{
			header: 'értékes, színvonalas hobbi',
			text: [
				'teljesen kezdőknek és haladóknak is',
				'tanulás akusztikus és elektromos gitáron egyaránt'
			]
		}
	]
}
