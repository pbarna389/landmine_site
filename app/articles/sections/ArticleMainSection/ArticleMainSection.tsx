type ArticleMainSectionProps = React.PropsWithChildren

export const ArticleMainSection = ({ children }: ArticleMainSectionProps) => {
	return (
		<section
			className={`mt-1.5 w-full bg-[url(/cikkekhtr.jpg)] bg-fixed bg-cover overflow-hidden after:content-['']`}
		>
			<div className="flex flex-col items-center w-full h-full space-y-10 p-32 pl-2.5 pr-2.5 sm:pl-15 sm:pr-15 md:pl-20 md:pr-20 bg-linear-to-b from-hero-highlight/65 from-0% to-40% to-white">
				{children}
			</div>
		</section>
	)
}
