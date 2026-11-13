import { Heading, RecursiveContent, SubrouteLink } from '@/components'

import { getMusicContent } from '../../server'

//				<p className="music-description-text">{textContent}</p>

export const MainContent = async ({ children }: React.PropsWithChildren) => {
	const { musicData, subpageData } = await getMusicContent()

	const { title, textContent } = musicData

	const sortedLinks = [...subpageData].sort((a, b) => b.id - a.id)

	return (
		<>
			<Heading
				text={title}
				className="font-montserrat normal-case text-center text-[40px] sm:normal-case sm:text-[42px] md:text-[42px] lg:text-[210%] lg:after:transform lg:after:-translate-x-1/2 lg:after:left-1/2 xl:text-[290%] 2xl:text-[300%]"
			/>
			<article className="text-center font-montserrat w-full md:w-fit classes-page-text-base">
				<RecursiveContent data={textContent.content} level={0} classKey="music" />
			</article>
			<nav className="flex flex-col lg:flex-row wrap gap-6">
				{sortedLinks.map((link) => (
					<SubrouteLink
						className='after:content-[""] after:absolute after:w-full after:-bottom-0.5 after:left-0 after:h-px after:transition-transform after:origin-left after:scale-x-0 after:bg-section-heading-highlight'
						key={`subroute-link-${link.id}`}
						updateClassNames="after:scale-x-100"
						id={link.id.toString()}
						route="music"
						text={link.title}
					/>
				))}
			</nav>
			{children}
		</>
	)
}
