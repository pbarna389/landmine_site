import { NAVIGATION_HEADING_ID_REFERENCE } from '@/constants/constants'

export default function AboutLayout({ children }: React.PropsWithChildren) {
	return (
		<main
			id={NAVIGATION_HEADING_ID_REFERENCE}
			className="about-page-text-base flex flex-col p-28 pl-5 pr-5 w-full gap-5 bg-white font-sans text-black sm:pl-15 sm:pr-15 md:pl-[18%] md:pr-[18%]  md:gap-15 lg:pl-[13%] lg:pr-[12%] lg:gap-[9%] xl:flex-row 2xl:pl-[18%] 2xl:pr-[17%] 2xl:gap-[11%] *:font-montserrat"
		>
			{children}
		</main>
	)
}
