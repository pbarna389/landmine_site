import { VideoCategoryCard } from './VideoCategoryCard'
import { VideoHeader } from './VideoHeader'
import { getVideosContent } from '../../server'

export const MainContent = async () => {
	const { title, textContent, subPages } = await getVideosContent()

	return (
		<>
			<VideoHeader title={title} textContent={textContent} />
			<nav className="flex flex-col justify-center items-center gap-10 lg:gap-5 lg:items-stretch lg:justify-between lg:flex-row lg:flex-wrap">
				{subPages.map((card, idx) => (
					<VideoCategoryCard key={`video-category-card-${card.id}`} card={card} idx={idx} />
				))}
			</nav>
		</>
	)
}
