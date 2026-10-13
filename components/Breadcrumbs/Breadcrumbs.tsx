'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '../Icons'

const convertRoute: Record<string, string> = {
	articles: 'cikkek',
	videos: 'videók',
	classes: 'gitároktatás',
	about: 'adatlap',
	music: 'zene',
	all: 'összes cikk',
	theory: 'zeneelmélet',
	advices: 'tippek',
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
		<nav className="w-full flex flex-wrap items-center justify-center sm:justify-normal gap-2.5 text-sm p-1 pl-10 bg-zinc-50 text-black font-raleway">
			<Link href="/">
				<Icons iconVars={'home'} />
			</Link>
			{generatedLinks.includes('home')
				? null
				: generatedLinks.map((route, idx) => (
						<div className="flex gap-2.5" key={`breadcrumbs-link-${route}-${idx}`}>
							<span className="cursor-default">
								<Icons iconVars={'chevronLeft'} />
							</span>
							<Link
								className="capitalize font-bold italic"

								href={`/${generateLinkRoute(generatedLinks, idx)}`}
							>
								{convertRoute[route] ? convertRoute[route] : route}
							</Link>
						</div>
					))}
		</nav>
	)
}
