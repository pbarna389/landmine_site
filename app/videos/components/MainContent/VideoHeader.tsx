import { Heading, RecursiveContent } from '@/components'
import type { DocType } from '@/types'

type HeaderProps = {
	textContent: DocType
	title: { subtext: string; text: string }
}

export const VideoHeader = ({ title, textContent }: HeaderProps) => {
	return (
		<div className="flex w-full justify-center items-center text-justify md:justify-end md:basis-1/2">
			<div className="text-container flex flex-col gap-10 lg:w-1/2 *:text-center *:lg:text-start">
				<Heading
					text={title.text}
					className="text-[310%] sm:text-[310%] md:text-[310%] lg:text-[310%] text-white capitalize lg:text-black"
				/>
				<h2 className="videos-sub-heading-text text-white lg:text-black">{title.subtext}</h2>
				<RecursiveContent data={textContent.content} level={0} classKey="videos" />
				<p className="videos-text text-white lg:text-black" />
			</div>
		</div>
	)
}
