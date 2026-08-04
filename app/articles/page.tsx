import { Heading } from '@/components'
import { ARTICLE_MAIN_CONTENT } from './constants/constants'

import { ArticleMainSection } from './sections'

export default function ArticlesPage() {
	const {
		title,
		textContent: { text, subText }
	} = ARTICLE_MAIN_CONTENT

	return (
		<main className="flex flex-col items-center bg-zinc-50 font-sans text-black">
			<ArticleMainSection>
				<Heading
					text={title}
					className="lg:after:transform lg:after:-translate-x-1/2 lg:after:left-1/2 lg:text-[60px] lg:capitalize font-montserrat"
				/>
				<article className="whitespace-pre-line text-[14px] w-[90vw] text-center sm:pl-5 sm:pr-5 sm:w-[70vw] md:text-[16px] md:w-[50vw] *:mb-3">
					<p>{text}</p>
					<p>{subText}</p>
				</article>
			</ArticleMainSection>
		</main>
	)
}
