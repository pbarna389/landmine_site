import { NAV_ICONS_BASE } from '@/constants/constants'

import Image1 from '../Assets/03sz.jpg'

export const FOOTER_CONTENT = {
	media: {
		content: {
			title: 'média / közösség',
			text: [
				'Csatlakozz közösségi oldalaimhoz, ahol rengeteg hasznos anyagot osztok meg rendszeresen!',
				'Gitáros videók, gyakorlási tippek, zenei játékok - és még sok más...'
			],
			links: [
				...NAV_ICONS_BASE,
				{
					site: 'telephone',
					href: 'tel:06307207878'
				}
			]
		}
	},
	contact: {
		content: {
			title: 'kapcsolat',
			fields: [
				{
					name: 'name',
					type: 'input'
				},
				{
					name: 'email',
					type: 'email'
				},
				{
					name: 'text',
					type: 'textarea'
				}
			],
			submitBtn: {
				text: 'küldés'
			}
		}
	},
	info: {
		content: {
			title: 'honlap',
			text: ['landmine web', 'since 2004'],
			emoticon: '★',
			image: {
				src: Image1,
				alt: 'kép a gitárokról és a műhelyről'
			},
			link: {
				text: 'adatkezelés',
				href: null
			}
		}
	}
}
