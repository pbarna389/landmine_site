import Image1 from '../Assets/01sz.webp'
import Image2 from '../Assets/02sz.webp'
import Image3 from '../Assets/03sz.jpg'

export const CLASSROOM_CONTENT = {
	title: {
		text: 'klásszrúm :)'
	},
	content: {
		textContent: {
			text:
				'Otthoni műhelykémben minden felszerelés biztosított mind a gitárórákhoz, mind a különböző kiegészítő zenei munkákhoz, felvételekhez, keverésekhez. \nNeked már csak a saját gitárodat kell hoznod és mehet a zúzás.. :)'
		},
		images: [
			{ src: Image1, alt: 'szoba1' },
			{ src: Image2, alt: 'szoba2' },
			{ src: Image3, alt: 'szoba3' }
		]
	},
	carouselTimeouts: {
		intervalTimeout: 3500,
		changeTimeout: 350
	}
}
