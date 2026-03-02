export default function Home() {
	return (
		<main className="flex flex-col p-28 pl-41 pr-41 w-full gap-2 bg-white font-sans text-black md:flex-row *:font-montserrat">
			<article className="basis-1/2">
				<h1 className="text-[58px] mb-10 font-bold basis-3/4 relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-17 after:h-1 after:bg-section-heading-highlight">
					Adatlap
				</h1>
			</article>
			<section className="basis-1/2">
				<h1 className="text-[58px] font-bold">Info</h1>
			</section>
		</main>
	)
}
