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
		<ul className="flex flex-col w-full text-center gap-0.5 sm:flex-row sm:gap-0 m-0">
			{content.map((subCat) => (
				<Link
					className="w-full"
					key={`subcat-key-${subCat.text}-${subCat.id}`}
					href={`/examples/${categoryId}/${subCat.id}`}
				>
					<li
						className={`bg-section-header-background transition-colors duration-200 capitalize hover:bg-hover hover:text-white ${Number(lessonId) === subCat.id ? 'bg-hover text-white' : ''} `}
					>
						{subCat.text}
					</li>
				</Link>
			))}
		</ul>
	)
}
