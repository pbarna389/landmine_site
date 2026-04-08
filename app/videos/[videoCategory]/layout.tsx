import { notFound } from 'next/navigation'

import { CategoryLink } from './components'
import { VIDEO_CATEGORY_CONTENT } from './constants/constants'

export default async function VideoCategoryLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: Promise<{ videoCategory: string }>
}) {
	const { videoCategory } = await params

	const data = VIDEO_CATEGORY_CONTENT[videoCategory]

	if (!data) {
		notFound()
	}

	const {
		title: { text, subText },
		content
	} = data

	return (
		<section className="flex flex-col items-center justify-center p-28 pr-16 pl-16 border-t-5 border-white text-white bg-video-advert w-full *:text-white *:text-center *:font-montserrat">
			<div className="w-full text-center p-5 space-y-10 ">
				<h2 className="font-bold text-xl capitalize lg:text-[56px]">{text}</h2>
				<h3 className="font-light text-[20px] whitespace-pre-line">{subText}</h3>
			</div>
			<div className="flex flex-wrap p-10 justify-center items-center gap-5">
				{content.map((link) => (
					<CategoryLink key={`cat-link-${link.id}`} id={link.id} text={link.title} />
				))}
			</div>
			{children}
		</section>
	)
}
