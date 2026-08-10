export default function ClassesLayout({ children }: React.PropsWithChildren) {
	return (
		<main className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans pt-2">
			{children}
		</main>
	)
}
