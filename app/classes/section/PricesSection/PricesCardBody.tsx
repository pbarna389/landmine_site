import type { PricesContentType } from './constants/constants'

type PriceCardBodyProps = Omit<PricesContentType, 'image' | 'title'>

export const PricesCardBody = ({ textContent, subText }: PriceCardBodyProps) => {
	return (
		<div className="p-5">
			{textContent.text.map((text) => (
				<p
					key={`price-card-body-text-${text}`}
					className="text-[15px] whitespace-pre-line pb-2"
				>
					<span>{textContent.emoticon}</span>
					{text}
				</p>
			))}
			{subText && (
				<div>
					<h5 className="capitalize font-bold text-[15px] cursor-pointer select-none">
						{subText.title} {'>>'}
					</h5>
					<p className="whitespace-pre-line text-[12px] transition-all scale-y-0 origin-top max-h-0 duration-750 group-hover:scale-y-100 group-hover:max-h-100 group-active:scale-y-100 group-active:max-h-100 group-focus:scale-y-100 group-focus:max-h-100 ">
						{subText.content}
					</p>
				</div>
			)}
		</div>
	)
}
