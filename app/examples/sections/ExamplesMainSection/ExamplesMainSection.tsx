import Link from 'next/link'

import { Heading, RecursiveContent } from '@/components'

import { getExamplesMainContent } from '../../server/examples.service'

export const ExamplesMainSection = async () => {
	const { textContent, title, link } = await getExamplesMainContent()

	return (
		<section
			className={`w-full relative bg-[url(/gvidihtr.jpg)] bg-fixed bg-cover overflow-hidden`}
		>
			<article className="w-full h-full flex flex-col items-center gap-11 p-32 pl-2.5 pr-2.5 sm:pl-15 sm:pr-15 md:pl-20 md:pr-20 transition-all bg-linear-to-b from-white/40 from-0% to-[650px] to-section-header-background text-black font-montserrat text-[20px]">
				<Heading
					text={title}
					className="after:transform text-center after:-translate-x-1/2 after:left-1/2 after:bg-section-heading-highlight lg:after:-translate-x-1/2 lg:after:left-1/2 lg:capitalize lg:text-[64px]"
				/>
				<Link
					className="pl-5 pr-5 text-[16px] text-center transition-colors duration-200 leading-none tracking-[0.25em] p-2.5 bg-section-header-background font-bold uppercase rounded-sm border-black border-2 hover:bg-hover hover:text-white hover:border-white"
					href={link.href}
				>
					{link.text}
				</Link>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-25 *:text-center *:sm:text-start">
					<RecursiveContent data={textContent.content} level={0} />
				</div>
			</article>
		</section>
	)
}
