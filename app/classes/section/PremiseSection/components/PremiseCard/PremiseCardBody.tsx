import type { PremiseContentType } from '../../constants/constants'

type PremiseCardBodyProps = Omit<PremiseContentType, 'image'>

export const PremiseCardBody = ({ title, textContent }: PremiseCardBodyProps) => {
	return (
		<>
			{' '}
			<h3 className="classes-heading-text uppercase text-wrap xl:text-nowrap select-none cursor-default">
				{title.text}
				<span className="ml-1">{title.emoticon}</span>
			</h3>
			<hr className="w-full border border-black/20" />
			<div className="text-main">
				<p className="text-[87%] whitespace-pre-line">{textContent.text}</p>
			</div>
		</>
	)
}
