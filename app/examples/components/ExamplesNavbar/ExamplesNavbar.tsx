import Link from 'next/link'

type ExamplesNavbarProps = { links: { id: number; link: string; text: string }[] }

export const ExamplesNavbar = ({ links }: ExamplesNavbarProps) => {
	return (
		<nav
			aria-label="lecke példák navigációs sor"
			className="flex bg-section-header-background w-full flex-wrap p-0 pt-5 sm:p-5 items-center justify-center gap-10"
		>
			{links.map((el) => (
				<Link key={`examples-navbar-link-${el.id}`} href={`/${el.link}`}>
					<li className="list-none capitalize bg-carousel transition duration-200 text-center text-black p-5 pt-1 pb-1 rounded-sm border-3 border-black hover:text-white hover:bg-hover hover:border-white">
						{el.text}
					</li>
				</Link>
			))}
		</nav>
	)
}
