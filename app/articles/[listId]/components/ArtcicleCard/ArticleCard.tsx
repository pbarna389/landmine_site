import Image from 'next/image'

import { Card } from '@/components'

import type { ArticleCardType } from '../../constants/constants'

type ArticleCardProps = ArticleCardType & {
	idx: number
}

const TAG_CONVERT: { [key: string]: string } = {
	theory: 'zeneelmélet',
	advices: 'tippek',
	facts: 'érdekességek',
	music: 'zenékről',
	philosophy: 'filozófia'
}

export const ArticleCard = ({ title, date, tags, img, text, idx }: ArticleCardProps) => {
	return (
		<Card className="items-start gap-2.5 max-w-full w-full h-65 lg:h-80 rounded-xl border border-black p-0 pt-0 pr-0 pl-0 pb-0 overflow-hidden group sm:min-w-1/4 lg:w-full lg:min-h-full *:font-montserrat">
			<Card.Header
				idx={idx}
				className="relative basis-1/2 sm:basis-2/5 md:basis-1/2 h-full overflow-hidden p-0"
			>
				<Image
					src={img.src}
					alt={title}
					className="transition-['scale'] duration-150 group-hover:scale-105 object-cover"
					priority
					sizes="(max-width: 800px) 50vw, (max-width: 960px) 75vw, 100vw"
					fill
				/>
			</Card.Header>
			<div className="p-2.5 pt-0 text-start basis-1/2 sm:basis-2/5 md:basis-1/2 overflow-hidden ">
				<h2 className="capitalize w-full m-0 text-sm sm:text-md">{title}</h2>
				<p className="inline text-hover m-0 p-0 h-2 *:capitalize *:text-[12px]">
					<span>
						{date} {'>'}
					</span>
					{tags.map((tag, tagIdx) => (
						<span key={`article-tag-key-${tag}`}>
							{' '}
							{TAG_CONVERT[tag]} {tagIdx === tags.length - 1 ? '' : '/'}
						</span>
					))}
				</p>
				<article className="text-[15px] sm:text-[18px] text-wrap line-clamp-2 sm:line-clamp-3 lg:line-clamp-4 ">
					{text}
				</article>
			</div>
		</Card>
	)
}
