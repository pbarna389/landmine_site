export default function ClassesLayout({ children }: React.PropsWithChildren) {
	return (
		<main className="flex flex-col min-h-screen items-center font-sans text-[19px] bg-white">
			{children}
		</main>
	)
}
