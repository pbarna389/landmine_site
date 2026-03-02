'use client'

import Link from 'next/link'

import { IconContext } from 'react-icons'

import type { LinkWithIconsType } from '@/types'

import { Icons } from '../Icons'

type LinksWithIconsWrapperProps = {
	links: LinkWithIconsType
	size?: `${number extends number ? number : never}`
}

export const LinksWithIconsWrapper = ({
	links,
	size = '28'
}: LinksWithIconsWrapperProps) => {
	return (
		<IconContext value={{ size }}>
			{links.map((icon) => (
				<Link key={`navbar-desktop-icon-${icon.site}`} href={icon.href} target="_blank">
					<Icons iconVars={icon.site} />
				</Link>
			))}
		</IconContext>
	)
}
