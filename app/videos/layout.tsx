export default function VideosLayout({ children }: React.PropsWithChildren) {
	return (
		<main className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-raleway *:text-black">
			{children}
		</main>
	)
}
