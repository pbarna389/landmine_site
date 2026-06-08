'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { useMemo } from 'react'

type SubrouteLinkProps = {
	id: string
	text: string
}

export const SubrouteLink = ({ id, text }: SubrouteLinkProps) => {
	const { listId } = useParams<{ listId: string }>()

	const shouldUpdate = useMemo(() => {
		return id === listId
	}, [id, listId])

	return (
		<Link
			className={`relative whitespace-normal sm:whitespace-nowrap tracking-[2px] font-montserrat uppercase text-music-link font-bold cursor-pointer transition-colors hover:text-section-heading-highlight sm:text-[17px] md:text-[16px] after:content-[""] after:absolute after:w-full after:-bottom-0.5 after:left-0 after:h-px after:transition-transform after:origin-left after:scale-x-0 after:bg-section-heading-highlight ${shouldUpdate ? 'after:scale-x-100' : ''}`}
			href={`/music/${id}`}
			replace
		>
			&quot;{text}&quot;
		</Link>
	)
}
