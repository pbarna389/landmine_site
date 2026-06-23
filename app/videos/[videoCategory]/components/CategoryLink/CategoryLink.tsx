'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { useMemo } from 'react'

type CategoryLinkProps = {
	id: string
	text: string
}

export const CategoryLink = ({ id, text }: CategoryLinkProps) => {
	const { playlistId, videoCategory } = useParams<{
		playlistId: string
		videoCategory: string
	}>()

	const shouldUpdate = useMemo(() => {
		return id === playlistId
	}, [id, playlistId])

	return (
		<Link
			className={`whitespace-normal sm:whitespace-nowrap md:w-[35vw] xl:w-[20vw] border-white border-2 text-[16px] transition-colors cursor-pointer w-full p-4 pl-3 pr-3 mr-3 ml-3 sm:m-0 rounded uppercase duration-150 sm:text-[14px] md:text-sm font-bold active:text-black active:brightness-85 focus:text-black focus-within:bg-white focus-within:font-black ${shouldUpdate ? 'bg-white text-black' : ''}`}
			href={`/videos/${videoCategory}/${id}`}
			replace
		>
			{text}
		</Link>
	)
}
