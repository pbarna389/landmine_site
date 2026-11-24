import Image from 'next/image'

import PICTURE_01 from '../../assets/blogheader.jpg'

type ModalHeaderProps = {
	text: string
	title: string
}

export const ModalHeader = ({ title, text }: ModalHeaderProps) => {
	return (
		<div className="relative w-full min-h-0 h-[50dvh] overflow-hidden">
			<Image
				src={PICTURE_01.src}
				alt="blogpost fejléc"
				fill
				sizes="100vw"
				className="object-cover object-top-left"
			/>
			<div className="absolute h-full bg-black/50 flex flex-col items-center justify-center lg:items-start lg:justify-start gap-7.5 lg:bg-transparent lg:h-fit lg:gap-2.5 transform -translate-1/2 top-1/2 left-1/2 w-full lg:w-1/2 lg:left-[77%] xl:w-4/6 xl:left-[75%] *:text-white *:cursor-default *:select-none *:text-center *:lg:text-left">
				<h1 className="w-full text-[42px] sm:text-[46px] md:text-[50px] xl:text-[58px] lg:w-[75%] animate-blogPostMainHeaderAnim font-bold whitespace-pre-line">
					{title}
				</h1>
				<p className="text-[18px] font-bold lg:font-normal max-w-125 lg:max-w-[75%] lg:text-[22px] lg:w-full animate-blogPostSecondHeaderAnim whitespace-pre-line">
					{text}
				</p>
			</div>
		</div>
	)
}
