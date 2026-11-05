import { Triangle } from '../Triangle'

type QuoteProps = {
	author: string
	text: string
}

// TODO: Fix the styling

export const Quote = ({ text, author }: QuoteProps) => {
	return (
		<div className="flex flex-col relative text-justify p-3 pl-8 pr-8 w-4/5 mt-15 bg-quote text-black text-[14px] font-light select-none cursor-default lg:w-[10%] lg:h-[10%] lg:absolute lg:transform lg:overflow-hidden lg:-translate-y-1/2 lg:top-1/4 lg:right-0 lg:clip-half-circle lg:text-left lg:lg:pr-1.5 lg:justify-center lg:items-end lg:gap-2 xl:w-[14%] xl:h-[14%] xl:pr-4.5 lg:min-w-62 xl:font-normal 2xl:text-[16.25px] 2xl:pt-0">
			<p className="text-justify italic lg:w-3/4 lg:text-right">
				&quot;
				{text}
				&quot;
			</p>
			<cite>{author}</cite>
			<Triangle
				height="h-[25px]"
				width="w-[calc(100vw*0.09)]"
				background="bg-quote"
				className="none lg:block left-1/1 top-4/6 z-1 max-w-10 rotate-180"
			/>
		</div>
	)
}
