export default function BlogPostIdLayout({ children }: React.PropsWithChildren) {
	return (
		<main className="text-center bg-zinc-50 text-black p-5">
			<h1 className="text-2xl">BlogPost content will be shown here</h1>
			{children}
		</main>
	)
}
