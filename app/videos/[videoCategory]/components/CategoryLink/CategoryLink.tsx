'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

type CategoryLinkTypes = {
	id: string
	text: string
}

export const CategoryLink = ({ id, text }: CategoryLinkTypes) => {
	const params = useParams<{ playlistId: string; videoCategory: string }>()

	return (
		<Link
			className="p-10 pt-5 pb-5 border-white uppercase border-2 rounded-sm text-[16px] cursor-pointer"
			href={`/videos/${params.videoCategory}/${id}`}
			replace
		>
			{text}
		</Link>
	)
}
