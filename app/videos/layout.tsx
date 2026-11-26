import { NAVIGATION_HEADING_ID_REFERENCE } from '@/constants/constants'

export default function VideosLayout({ children }: React.PropsWithChildren) {
	return (
		<main
			id={NAVIGATION_HEADING_ID_REFERENCE}
			className="wrapper-base relative items-start justify-start min-h-screen max-h-fit bg-video-advert font-raleway"
		>
			{children}
		</main>
	)
}
