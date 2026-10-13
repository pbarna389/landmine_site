'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
		<nav className="w-full flex flex-wrap items-center gap-2.5 text-sm p-1 pl-5 bg-zinc-50 text-black font-raleway">
			<Link href="/">Home</Link>
			{generatedLinks.includes('home')
				? null
				: generatedLinks.map((route, idx) => (
						<>
							<span>/</span>
							<Link
								className="capitalize"
								key={`breadcrumbs-link-${route}-${idx}`}
								href={`/${generateLinkRoute(generatedLinks, idx)}`}
							>
								{convertRoute[route] ? convertRoute[route] : route}
							</Link>
						</>
					))}
		</nav>
	)
}
