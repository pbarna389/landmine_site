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
		<ul className="flex flex-col w-full text-center gap-0.5 sm:flex-row sm:w-150 sm:flex-nowrap sm:gap-0 m-0">
			{content.map((subCat) => (
				<li key={`subcat-key-${subCat.text}-${subCat.id}`} className={`w-full`}>
					<Link
						className={`block w-full bg-section-header-background transition-colors duration-200 capitalize hover:bg-hover hover:text-white ${Number(lessonId) === subCat.id ? ' text-white' : ''} `}
						href={`/examples/${categoryId}/${subCat.id}`}
					>
						{subCat.text}
					</Link>
				</li>
			))}
		</ul>
	)
}
