import { BackgroundImage, SubrouteLink } from './components'
import { Heading } from '@/components'
import { MUSIC_CATEGORY_CONTENT, SUBPAGE_INFO } from './constants/constants'

export default function MusicLayout({ children }: { children: React.ReactNode }) {
	const { title, textContent } = MUSIC_CATEGORY_CONTENT

	return (
		<main className="flex flex-col items-center justify-center relative min-h-screen pt-1 bg-zinc-50 font-raleway *:text-white">
			<BackgroundImage />
			<div className="absolute transform -translate-x-1/2 top-30 left-1/2 *:text-center flex flex-col gap-12 items-center justify-center">
				<Heading
					text={title}
					className="lg:after:transform lg:after:-translate-x-1/2 lg:after:left-1/2 lg:text-[60px] lg:capitalize font-montserrat"
				/>
				<article className="whitespace-pre-line text-[16px] w-3/4">{textContent}</article>
				<div className="flex wrap gap-10">
					{SUBPAGE_INFO.reverse().map((link) => (
						<SubrouteLink key={link.id} id={link.id.toString()} text={link.title} />
					))}
				</div>
				{children}
			</div>
		</main>
	)
}
