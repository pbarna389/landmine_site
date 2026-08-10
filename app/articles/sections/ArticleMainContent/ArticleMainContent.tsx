import { Heading, SubrouteLink } from '@/components'

import { getArticlesLayoutContent } from '../../server'

export const ArticleMainContent = async () => {
	const {
		title,
		filters,
		textContent: { text, subText }
	} = await getArticlesLayoutContent()

	return (
		<>
			<Heading
				text={title}
				className="lg:after:transform lg:after:-translate-x-1/2 lg:after:left-1/2 lg:text-[60px] lg:capitalize font-montserrat"
			/>
			<article className="whitespace-pre-line text-[14px] w-[90vw] text-center sm:pl-5 sm:pr-5 sm:w-[70vw] md:text-[16px] md:w-[45vw] *:mb-3">
				<p>{text}</p>
				<p className="font-bold">{subText}</p>
			</article>
			<nav className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 lg:flex-row wrap gap-6 *:text-black">
				{filters.map((link) => (
					<SubrouteLink
						key={`subroute-link-${link.id}`}
						id={link.linkName.toString()}
						route="articles"
						text={link.text}
						updateClassNames="bg-amber-500 outline-2"
						className="bg-amber-400 text-center text-black p-2 pt-1 pb-1 rounded-md outline outline-black w-full hover:text-white hover:bg-amber-400/40 after:content-['']"
					/>
				))}
			</nav>
		</>
	)
}
