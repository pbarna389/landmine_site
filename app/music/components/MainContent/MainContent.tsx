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
			<article className="whitespace-pre-line text-[14px] w-[90vw] text-center sm:pl-5 sm:pr-5 sm:w-[70vw] md:text-[16px] md:w-[45vw]">
				{textContent}
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
