import { Triangle } from '../Triangle'

type QuoteProps = {
	author: string
	text: string
}

export const Quote = ({ text, author }: QuoteProps) => {
	return (
		<div className="flex flex-col relative text-justify p-3 pl-8 pr-8 w-4/5 bg-quote text-black text-[14px] font-light lg:transform lg:overflow-hidden lg:w-68 lg:h-68 lg:-translate-y-1/2 lg:top-1/4 lg:right-0 lg:clip-half-circle lg:text-left lg:lg:pr-1.5 lg:absolute lg:justify-center lg:items-end lg:gap-2 select-none cursor-default xl:pr-4.5 xl:font-normal xl:text-[15px] xl:pt-0 xl:w-80 xl:h-80">
			<p className="text-justify lg:w-30 lg:text-right">
				&quot;
				{text}
				&quot;
			</p>
			<cite>{author}</cite>
			<Triangle
				height="h-[25px]"
				width="w-[calc(100vw*0.09)]"
				background="bg-quote"
				className="left-1/1 top-4/6 z-1 max-w-10 rotate-180"
			/>
		</div>
	)
}
