'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '../Icons'

// TODO: also move the related stuff to their utils/constant folder

const convertRoute: Record<string, string> = {
	articles: 'cikkek',
	videos: 'videók',
	classes: 'gitároktatás',
	about: 'adatlap',
	music: 'zenék',
	all: 'összes cikk',
	theory: 'zeneelmélet',
	advices: 'tippek',
	philosophy: 'filozófia',
	facts: 'érdekességek'
}

const generateLinkRoute = (arr: string[], idx: number): string => {
	return arr.slice(0, idx + 1).join('/')
}

export default function Breadcrumbs() {
	const pathName = usePathname()

	const routeNames = pathName.split('/')

	const generatedLinks = routeNames.slice(1, routeNames.length - 1)

	return (
		<nav
			aria-label="breadcrumb"
			className="min-h-10 w-full flex flex-wrap items-center justify-center pt-1 sm:justify-normal gap-2.5 text-sm sm:p-1 sm:pl-10 bg-zinc-50 text-black font-raleway"
		>
			<Link
				className="transition-[scale] hover:scale-110 focus:scale-110 focus:p-1"
				aria-label="Főoldal"
				href="/"
			>
				<Icons iconVars={'home'} />
			</Link>
			{generatedLinks.map((route, idx) => (
				<div className="flex gap-2.5" key={`breadcrumbs-link-${route}-${idx}`}>
					<span className="cursor-default">
						<Icons iconVars={'chevronLeft'} />
					</span>
					<Link
						aria-label={`Aloldal-${convertRoute[route] ? convertRoute[route] : route}`}
						className="capitalize font-bold italic transition-[scale] hover:scale-110 focus:scale-110 focus:pr-1 focus:pl-1 focus-within:scale-110"
						href={`/${generateLinkRoute(generatedLinks, idx)}`}
					>
						{convertRoute[route] ? convertRoute[route] : route}
					</Link>
				</div>
			))}
		</nav>
	)
}
