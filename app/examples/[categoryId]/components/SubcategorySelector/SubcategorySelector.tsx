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
			{content.map((subCat) => {
				const isActive = Number(lessonId) === subCat.id

				return (
					<li key={`subcat-key-${subCat.text}-${subCat.id}`} className={`w-full`}>
						<Link
							aria-current={isActive ? 'page' : undefined}
							className={`block w-full transition-colors duration-200 capitalize hover:text-white  ${isActive ? ' text-white bg-red-500 hover:bg-red-700 ' : 'bg-section-header-background hover:bg-hover'} `}
							href={`/examples/${categoryId}/${subCat.id}`}
						>
							{subCat.text}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
