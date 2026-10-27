import { Heading, LinksWithIconsWrapper } from '@/components'
import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import { NAV_ICONS_BASE } from '@/constants/constants'

import { getAboutContent } from './server'

export default async function AboutPage() {
	const profileContent = await getAboutContent()

	const { textContent, profileInfo } = profileContent

	return (
		<main className="about-page-text-base flex flex-col p-28 pl-5 pr-5 w-full gap-5 bg-white font-sans text-black sm:pl-15 sm:pr-15 md:pl-[18%] md:pr-[18%]  md:gap-15 lg:pl-[13%] lg:pr-[12%] lg:gap-[9%] xl:flex-row 2xl:pl-[18%] 2xl:pr-[17%] 2xl:gap-[11%] *:font-montserrat">
			<article className="lg:basis-[48%] xl:basis-[47%] 2xl:basis-[46%]">
				<h1 className="text-[220%] capitalize mb-12 text-center font-bold basis-3/4 relative xl:text-[290%] 2xl:text-[300%] after:content-[''] after:absolute after:-bottom-5 after:transform after:-translate-x-1/2 after:left-1/2 after:w-17 after:h-1 after:bg-section-heading-highlight xl:text-start xl:after:left-0 xl:after:transform-none xl:after:translate-0">
					{textContent.title.text}
				</h1>
				<section className="flex flex-col gap-5">
					{textContent.text.map((text, idx) => (
						<p className="main-text text-justify" key={`profile-text-${idx}`}>
							{text}
						</p>
					))}
				</section>
			</article>
			<section className="flex flex-col justify-between gap-5 animate-profileAnim lg:basis-[44%] xl:basis-[43%]">
				<div className="group relative w-full mt-12 border-2 border-transparent transition-colors duration-400 hover:border-2 hover:border-hero-highlight focus-within:border-2 focus-within:border-hero-highlight focus:border-2 focus:border-hero-highlight mb-5 xl:mb-0">
					<RotatableImage
						src={profileInfo.image.src}
						alt={profileInfo.image.alt}
						rotateLeft={false}
						className="w-full min-h-1/2"
					/>
					<span className="absolute main-text transform translate-x-1/2 -bottom-5 right-1/2 opacity-100 transition-opacity duration-500 text-hero-highlight xl:group-hover:opacity-100 xl:opacity-0 xl:top-0 xl:right-2 xl:transform-none xl:translate-0">
						&lsquo;landmine&lsquo;
					</span>
				</div>
				<div className="w-full">
					<Heading text={profileInfo.title.text} className="after:-bottom mb-10 text-center" />
					<div>
						{profileInfo.content.map((content, idx) => (
							<div
								className={`pl-2 pt-1.5 pb-1.5 flex items-center justify-center gap-2 w-full border-t border-black *:w-1/2 ${idx === profileInfo.content.length - 1 ? 'border-b border-black' : ''} lg:gap-5`}
								key={`profile-content-${content.title}`}
							>
								<h5 className="font-bold text-[75%] uppercase tracking-[2px]">{content.title}</h5>
								<p className="main-text">{content.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col no-wrap gap-10 justify-center sm:flex-row xl:justify-start">
					<div className="space-y-10 text-center lg:text-start">
						<Heading text="Social Media" />
						<div className="flex justify-center gap-2 lg:justify-start *:transition-all *:hover:scale-110 *:hover:brightness-125 *:cursor-pointer">
							<LinksWithIconsWrapper links={NAV_ICONS_BASE.slice(0, 3)} size="40" />
						</div>
					</div>
					<div className="space-y-10 text-center lg:text-start">
						<Heading text="Kontakt" />
						<div className="flex justify-center gap-2 lg:justify-start *:transition-all *:hover:scale-110 *:hover:brightness-125 *:cursor-pointer">
							<LinksWithIconsWrapper links={NAV_ICONS_BASE.slice(3, 5)} size="40" />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
