import { Heading, SubrouteLink } from '@/components'

import { getMusicContent } from '../../server'

export const MainContent = async ({ children }: React.PropsWithChildren) => {
	const { musicData, subpageData } = await getMusicContent()

	const { title, textContent } = musicData

	const sortedLinks = [...subpageData].sort((a, b) => b.id - a.id)

	return (
		<>
			<Heading
				text={title}
				className="lg:after:transform lg:after:-translate-x-1/2 lg:after:left-1/2 lg:text-[60px] lg:capitalize font-montserrat"
			/>
			<article className="text-center classes-page-text-base w-[90vw] sm:pl-5 sm:pr-5 sm:w-[85vw] md:w-[45vw]">
				<p className="music-description-text">{textContent}</p>
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
