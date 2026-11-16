export default function VideosLayout({ children }: React.PropsWithChildren) {
	return (
		<main className="wrapper-base relative items-start justify-start min-h-screen max-h-fit bg-video-advert font-raleway">
			{children}
		</main>
	)
}
