export default function VideoCategoryLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="flex flex-col items-center justify-center p-28 pr-16 pl-16 text-white">
			{children}
		</section>
	)
}
