import Link from 'next/link'

import { getExamplesMainContent } from '../../server/examples.service'

export const ExamplesNavbar = async () => {
	const { filters: links } = await getExamplesMainContent()

	return (
		<nav
			aria-label="lecke példák navigációs sor"
			className="flex relative bg-section-header-background w-full flex-wrap p-0 pt-5 sm:p-5 items-center justify-center gap-10 shadow-2xl shadow-section-header-background"
		>
			{links.map((el) => (
				<Link
					className={`list-none capitalize bg-carousel transition duration-200 text-center text-black p-5 pt-1 pb-1 rounded-sm border-3 border-black hover:text-white hover:bg-hover hover:border-white`}
					key={`examples-navbar-link-${el.id}`}
					href={`/${el.link}`}
				>
					{el.text}
				</Link>
			))}
		</nav>
	)
}
