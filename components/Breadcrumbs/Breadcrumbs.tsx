'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const generateLinkRoute = (arr: string[], end: number): string => {
	return 'should be implemented'
}

export default function Breadcrumbs() {
	const pathName = usePathname()

	const routeNames = pathName.split('/')
	const generatedLinks = routeNames.slice(1, routeNames.length - 1)

	console.log(generatedLinks)
	return (
		<nav className="w-full flex flex-wrap items-center gap-2.5 text-sm p-1 pl-5 bg-zinc-50 text-black font-raleway">
			<Link href="/">Home</Link>
			{generatedLinks.includes('home')
				? null
				: generatedLinks.map((route, idx) => (
						<Link
							className="capitalize"
							key={`breadcrumbs-link-${route}-${idx}`}
							href={`${generateLinkRoute(generatedLinks, idx)}`}
						>
							{route}
						</Link>
					))}
		</nav>
	)
}
