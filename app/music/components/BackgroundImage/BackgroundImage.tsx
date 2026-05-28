type BackgroundImageProps = {
	bgPos: 'top' | 'bottom'
	source: `${string}.${'jpg' | 'bmp'}`
}

const arrangements = {
	top: 'bg-linear-to-t',
	bottom: 'bg-linear-to-b'
}

export const BackgroundImage = ({ bgPos, source }: BackgroundImageProps) => {
	return (
		<div
			className={`w-full min-h-screen bg-[url(/${source})] bg-fixed bg-cover overflow-hidden`}
		>
			<div className={`w-full min-h-screen ${arrangements[bgPos]} from-black to-black/50`} />
		</div>
	)
}
