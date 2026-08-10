import { VideoCategoryCard } from './VideoCategoryCard'
import { VideoHeader } from './VideoHeader'
import { getVideosContent } from '../../server'

export const MainContent = async () => {
	const { title, textContent, subPages } = await getVideosContent()

	return (
		<>
			<VideoHeader title={title} textContent={textContent} />
			<nav className="flex flex-col justify-center items-center gap-5 md:flex-row md:flex-wrap">
				{subPages.map((card, idx) => (
					<VideoCategoryCard key={`video-category-card-${card.id}`} card={card} idx={idx} />
				))}
			</nav>
		</>
	)
}
