import type { PremiseContentType } from './constants/constants'

type PremiseCardBodyProps = Omit<PremiseContentType, 'image'>

export const PremiseCardBody = ({ title, textContent }: PremiseCardBodyProps) => {
	return (
		<>
			{' '}
			<h3 className="uppercase text-md text-wrap lg:text-nowrap select-none cursor-default">
				{title.text}
				<span className="ml-1">{title.emoticon}</span>
			</h3>
			<hr className="w-full border border-black/20" />
			<div>
				<p className="text-[15px] whitespace-pre-line">{textContent.text}</p>
			</div>
		</>
	)
}
