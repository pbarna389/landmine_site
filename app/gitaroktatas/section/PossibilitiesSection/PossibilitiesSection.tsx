import { POSSIBILITIES_CONTENT } from './constants/constants'

import { PossibilitiesDetail } from './PossibilitiesDetail'
import { PossibilityParagraph } from './PossibilityParagraph'
import { Pentagon, Quote, Section, Triangle } from '../../components'

export const PossibilitiesSection = () => {
	const {
		header,
		content: { body, quote },
		info
	} = POSSIBILITIES_CONTENT

	return (
		<Section className="relative">
			<Section.Header side="right">
				<div className="flex flex-col gap-4 items-center justify-center mb-17">
					<h2 className="font-bold capitalize text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px]">
						{header.title}
					</h2>
					<span className="h-0.5 w-15 bg-section-heading-highlight" />
					<h2 className="uppercase text-[14px] sm:text-[16px] md-[18px] lg:text-[20px]">
						{header.subTitle}
					</h2>
				</div>
			</Section.Header>
			<Section.Body className="w-full flex flex-col justify-center items-center gap-32 *:font-montserrat">
				<article className="w-9/10 sm:w-4/5 md:w-[70%] lg:w-1/2 p-5 bg-section-body shadow-2xl space-y-5 rounded  xl:w-[42%] xl:p-7.5 xl:pl-11 xl:pr-11 *:text-start *:text-[16px] *:md:text-[15px] *:lg:text-[16px] *:leading-4.5">
					{body.map((paragraph) => (
						<PossibilityParagraph key={paragraph.id} content={paragraph} />
					))}
				</article>
				<div className="flex flex-col justify-start items-start relative w-full gap-10 p-30 pr-3 pl-3 bg-section-detail-bg sm:pr-5 sm:pl-5 md:pr-9.5 md:pl-9.5 lg:pr-19 lg:pl-19">
					<Pentagon width="w-[calc(100vw*0.1)]" height="h-14" />
					<Triangle width="w-[90%]" height="h-7" background="bg-cube-secondary" />
					<Triangle position="bottom" width="w-[90%]" height="h-7" />
					{info.map((box, idx) => (
						<PossibilitiesDetail key={`info-box-${box.title}`} content={box} idx={idx} />
					))}
				</div>
			</Section.Body>
			<Quote text={quote.text} author={quote.author} />
		</Section>
	)
}
