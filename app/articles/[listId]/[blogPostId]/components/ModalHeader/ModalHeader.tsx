import Image from 'next/image'

import PICTURE_01 from '../../assets/blogheader.jpg'

type ModalHeaderProps = {
	text: string
	title: string
}

export const ModalHeader = ({ title, text }: ModalHeaderProps) => {
	return (
		<div className="relative w-full min-h-0 h-[65dvh] overflow-hidden">
			<Image src={PICTURE_01.src} alt="blogpost fejléc" fill />
			<div className="absolute w-4/6 flex flex-col gap-2.5 transform -translate-1/2 top-1/2 left-[75%] *:text-white *:cursor-default *:select-none">
				<h2 className="text-[58px] w-[75%] font-bold whitespace-pre-line">{title}</h2>
				<h5 className="text-[22px] w-[75%] whitespace-pre-line">{text}</h5>
			</div>
		</div>
	)
}
