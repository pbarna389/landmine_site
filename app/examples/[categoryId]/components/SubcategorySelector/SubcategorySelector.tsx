'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

type SubCategoryProps = {
	categoryId: string
	content: {
		id: number
		text: string
	}[]
}

export const SubcategorySelector = ({ categoryId, content }: SubCategoryProps) => {
	const { lessonId } = useParams<{ lessonId: string }>()

	return (
		<ul className="flex flex-wrap items-center justify-center m-0">
			{content.map((subCat) => (
				<Link
					key={`subcat-key-${subCat.text}-${subCat.id}`}
					href={`/examples/${categoryId}/${subCat.id}`}
				>
					<li
						className={`bg-section-header-background p-5 pt-1 pb-1 transition-colors duration-200 capitalize hover:bg-hover hover:text-white ${Number(lessonId) === subCat.id ? 'bg-hover text-white' : ''} `}
					>
						{subCat.text}
					</li>
				</Link>
			))}
		</ul>
	)
}
