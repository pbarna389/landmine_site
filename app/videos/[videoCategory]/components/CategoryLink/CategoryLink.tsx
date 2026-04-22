'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { useMemo } from 'react'

type CategoryLinkTypes = {
	id: string
	text: string
}

export const CategoryLink = ({ id, text }: CategoryLinkTypes) => {
	const params = useParams<{ playlistId: string; videoCategory: string }>()

	const shouldUpdate = useMemo(() => {
		return id === params.playlistId
	}, [id, params.playlistId])

	return (
		<Link
			className={`whitespace-normal sm:whitespace-nowrap md:w-[35vw] xl:w-[20vw] border-white border-2 text-[16px] transition-colors cursor-pointer w-full p-4 pl-3 pr-3 rounded uppercase  duration-150 sm:text-[14px] md:text-sm active:brightness-75 focus-within:bg-white focus-within:font-black  ${shouldUpdate ? 'bg-white text-black font-bold' : ''}`}
			href={`/videos/${params.videoCategory}/${id}`}
			replace
		>
			{text}
		</Link>
	)
}
