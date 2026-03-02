import { LinksWithIconsWrapper } from '@/components'
import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import { PROFILE_CONTENT } from './constants/constants'
import { NAV_ICONS_BASE } from '@/constants/constants'

export default function Home() {
	const {
		profileContent: { textContent, profileInfo }
	} = PROFILE_CONTENT

	return (
		<main className="flex flex-col p-28 pl-5 pr-5 w-full gap-5 bg-white font-sans text-black sm:pl-15 sm:pr-15 md:pl-20 md:pr-20 md:flex-row md:gap-15 lg:pr-41 lg:pl-41 lg:gap-22 *:font-montserrat">
			<article className="basis-1/2">
				<h1 className="text-3xl capitalize mb-12 text-center font-bold basis-3/4 relative sm:text-4xl md:text-5xl lg:text-[58px] after:content-[''] after:absolute after:-bottom-5 after:transform after:-translate-x-1/2 after:left-1/2 after:w-17 after:h-1 after:bg-section-heading-highlight lg:text-start lg:after:left-0 lg:after:transform-none lg:after:translate-0">
					{textContent.title.text}
				</h1>
				<div className="*:text-justify *:leading-5.5">
					{textContent.text.map((text, idx) => (
						<p className="mb-5 text-[18px]" key={`profile-text-${idx}`}>
							{text}
						</p>
					))}
				</div>
			</article>
			<section className="flex flex-col gap-5 basis-1/2">
				<div className="group relative w-full mt-12 border-2 border-transparent transition-colors duration-400 hover:border-2 hover:border-hero-highlight active:border-2 active:border-hero-highlight focus-within:border-2 focus-within:border-hero-highlight focus:border-2 focus:border-hero-highlight">
					<RotatableImage
						src={profileInfo.image.src}
						alt={profileInfo.image.alt}
						rotateLeft={false}
						className="w-full"
					/>
					<span className="absolute top-0 right-2 text-[18px] opacity-0 transition-opacity duration-500 text-hero-highlight group-hover:opacity-100">
						&lsquo;landmine&lsquo;
					</span>
				</div>
				<div className="space-y-10 text-center lg:text-start">
					<h2 className="text-md relative uppercase font-bold sm:text-2xl md:text-3xl lg:text-xl after:absolute after:-bottom-5 after:transform after:-translate-x-1/2 after:left-1/2 after:w-17 after:h-1 after:bg-section-heading-highlight lg:text-start lg:after:left-0 lg:after:transform-none lg:after:translate-0">
						{profileInfo.title.text}
					</h2>
				</div>
				<div className="w-full mt-5 *:border-t *:border-black">
					{profileInfo.content.map((content, idx) => (
						<div
							className={`pl-1 pt-2 flex items-center justify-center gap-2 w-full *:w-1/2 ${idx === profileInfo.content.length - 1 ? 'border-b border-black' : ''} lg:gap-5`}
							key={`profile-content-${content.title}`}
						>
							<h5 className="font-bold uppercase text-[12px] tracking-[1.5px] sm:text-[16px]">
								{content.title}
							</h5>
							<p className="text-[14px] sm:text-[18px]">{content.text}</p>
						</div>
					))}
				</div>
				<div className="flex justify-center gap-2 lg:justify-start">
					<LinksWithIconsWrapper links={NAV_ICONS_BASE.reverse()} size="40" />
				</div>
			</section>
		</main>
	)
}
