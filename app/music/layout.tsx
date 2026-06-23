import { HeightRefContextProvider } from './context'
import { BackgroundImage, MainContent, MainSection, SubrouteLink } from './components'
import { Heading } from '@/components'
import { MUSIC_CATEGORY_CONTENT, SUBPAGE_INFO } from './constants/constants'

export default function MusicLayout({ children }: { children: React.ReactNode }) {
	const { title, textContent } = MUSIC_CATEGORY_CONTENT

	const sortedLinks = SUBPAGE_INFO.sort((a, b) => b.id - a.id)

	return (
		<HeightRefContextProvider>
			<MainSection>
				<BackgroundImage />
				<MainContent>
					<Heading
						text={title}
						className="lg:after:transform lg:after:-translate-x-1/2 lg:after:left-1/2 lg:text-[60px] lg:capitalize font-montserrat"
					/>
					<article className="whitespace-pre-line text-[14px] w-[90vw] text-center sm:pl-5 sm:pr-5 sm:w-[70vw] md:text-[16px] md:w-[50vw]">
						{textContent}
					</article>
					<div className="flex flex-col lg:flex-row wrap gap-6">
						{sortedLinks.map((link) => (
							<SubrouteLink
								key={`subroute-link-${link.id}`}
								id={link.id.toString()}
								text={link.title}
							/>
						))}
					</div>
					{children}
				</MainContent>
			</MainSection>
		</HeightRefContextProvider>
	)
}
