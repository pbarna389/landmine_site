export const BackgroundImage = () => {
	return (
		<>
			<div
				className={`w-full min-h-screen h-full bg-[url(/music1.jpg)] bg-fixed bg-cover overflow-hidden`}
			>
				<div className={`w-full min-h-screen h-full bg-linear-to-t from-black to-black/75`} />
			</div>
			<div
				className={`w-full min-h-screen bg-[url(/music2.jpg)] bg-fixed bg-cover overflow-hidden`}
			>
				<div className={`w-full min-h-screen bg-linear-to-b from-black to-black/75`} />
			</div>
		</>
	)
}
