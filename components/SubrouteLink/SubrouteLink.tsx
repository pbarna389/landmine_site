'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { useMemo } from 'react'

type SubrouteLinkProps = {
	id: string
	route: 'music' | 'classes' | 'articles' | 'about' | 'videos'
	text: string
	updateClassNames: string
	className?: string
}

export const SubrouteLink = ({
	id,
	route,
	text,
	className = '',
	updateClassNames
}: SubrouteLinkProps) => {
	const { listId } = useParams<{ listId: string }>()

	const shouldUpdate = useMemo(() => {
		return id === listId
	}, [id, listId])

	return (
		<Link
			className={`relative whitespace-normal sm:whitespace-nowrap tracking-[2px] font-montserrat uppercase text-music-link font-bold cursor-pointer transition-colors hover:text-section-heading-highlight sm:text-[17px] md:text-[16px]  ${shouldUpdate ? updateClassNames : ''} ${className}`}
			href={`/${route}/${id}`}
			replace
		>
			&quot;{text}&quot;
		</Link>
	)
}
