type VideoMainSectionProps = React.PropsWithChildren

export const VideoMainSection = ({ children }: VideoMainSectionProps) => {
	return (
		<section
			className={`w-full bg-[url(/sorozatokhtr.jpg)] bg-fixed bg-cover overflow-hidden lg:bg-[url(/sorozatokhtr2.jpg)] after:content-['']`}
		>
			<div className="w-full h-full p-32 pl-2.5 pr-2.5 sm:pl-15 sm:pr-15 md:pl-20 md:pr-20 bg-linear-to-b from-transparent to-white from-0% to-90% flex flex-col gap-30 items-center justify-center">
				{children}
			</div>
		</section>
	)
}
