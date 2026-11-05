import type { POSSIBILITIES_CONTENT } from './constants/constants'

import { PossibilitiesDetail } from './PossibilitiesDetail'
import { PossibilityParagraph } from './PossibilityParagraph'
import { Pentagon, Quote, Section, Triangle } from '../../components'

type PossibilitiesSectionProps = {
	data: typeof POSSIBILITIES_CONTENT
}

export const PossibilitiesSection = ({ data }: PossibilitiesSectionProps) => {
	const {
		id,
		header,
		content: { body, quote },
		info
	} = data

	return (
		<Section id={id} className="relative">
			<Section.Header id={id} side="right">
				<div className="flex flex-col gap-4 items-center justify-center mb-17">
					<h2 className="possibilities-heading-text font-bold capitalize">{header.title}</h2>
					<span className="h-0.5 w-15 bg-section-heading-highlight" />
					<h2 className="classes-heading-text uppercase">{header.subTitle}</h2>
				</div>
			</Section.Header>
			<Section.Body
				id={id}
				className="w-full flex flex-col justify-center items-center gap-32 *:font-montserrat"
			>
				<article className="possibilties-main-article w-9/10 sm:w-4/5 text-main bg-section-body shadow-2xl space-y-5 rounded-lg p-7.5 md:p-[4%] md:w-[70%] lg:w-[60%] xl:w-[52%] 2xl:w-[42%] 2xl:p-11 *:text-justify">
					{body.map((paragraph) => (
						<PossibilityParagraph key={paragraph.id} content={paragraph} />
					))}
				</article>
				<article className="flex flex-col justify-start items-start relative w-full gap-10 p-30 pr-8 pl-8 bg-poss-details-color sm:pr-0 sm:pl-0 lg:pr-[6%] lg:pl-[6%] 2xl:pr-[10%] 2xl:pl-[10%]">
					<Pentagon width="w-[calc(100vw*0.1)]" height="h-14" />
					<Triangle width="w-[90%]" height="h-7" background="bg-penta-main" />
					<Triangle position="bottom" width="w-[90%]" height="h-7" />
					{info.map((box, idx) => (
						<PossibilitiesDetail key={`info-box-${box.title}`} content={box} idx={idx} />
					))}
				</article>
			</Section.Body>
			<Quote text={quote.text} author={quote.author} />
		</Section>
	)
}
