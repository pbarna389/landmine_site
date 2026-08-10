import { Heading } from '@/components'

type HeaderProps = {
	textContent: { text: string }
	title: { subtext: string; text: string }
}

export const VideoHeader = ({ title, textContent }: HeaderProps) => {
	return (
		<div className="flex w-full justify-center items-center md:justify-end md:basis-1/2">
			<div className="flex flex-col gap-10 lg:w-1/2 *:text-center *:lg:text-start">
				<Heading
					text={title.text}
					className="text-[48px] sm:text-[48px] md:text-[48px] lg:text-[62px] text-white capitalize lg:text-black"
				/>
				<h2 className="text-2xl text-white capitalize lg:text-black">{title.subtext}</h2>
				<article className="text-white lg:text-black">{textContent.text}</article>
			</div>
		</div>
	)
}
