import { Heading, RecursiveContent, SubrouteLink } from '@/components'

import { getMusicContent } from '../../server'

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
			<nav className="flex flex-col md:flex-row wrap lg:w-fit gap-10 xl:gap-6">
				{sortedLinks.map((link) => (
					<SubrouteLink
						className='p-2.5 sm:p-2.5 md:p-2.5 ml-[1%] mr-[1%] w-full sm:w-fit transition-all border-solid font-bold text-black hover:text-black text-center bg-section-heading-highlight hover:bg-music-link-highlight xl:hover:bg-transparent rounded-sm xl:hover:text-section-heading-highlight xl:bg-transparent xl:text-music-link xl:font-normal xl:p-0 xl:after:content-[""] xl:after:absolute xl:after:w-full xl:after:-bottom-0.5 xl:after:left-0 xl:after:h-px xl:after:transition-transform xl:after:origin-left xl:after:scale-x-0 xl:hover:after:scale-x-100 xl:after:bg-section-heading-highlight'
						key={`subroute-link-${link.id}`}
						updateClassNames="brightness-115 xl:bg-transparent xl:after:scale-x-100 xl:after:bg-section-heading-highlight"
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
