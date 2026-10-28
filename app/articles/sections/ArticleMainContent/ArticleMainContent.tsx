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
				className="text-center lg:after:transform text-[200%] sm:text-[220%] md:text-[226%] lg:text-[226%] xl:text-[315%] lg:after:-translate-x-1/2 lg:after:left-1/2  lg:capitalize font-montserrat"
			/>
			<article className="whitespace-pre-line text-[20px] 2xl:text-[19px] w-[90vw] text-center sm:pl-5 sm:pr-5 sm:w-[70vw] xl:w-[35vw] *:mb-7.5">
				<h2 className="premise-possibilities-text">{text}</h2>
				<h3 className="font-bold premise-possibilities-text">{subText}</h3>
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
