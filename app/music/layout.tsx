import { BackgroundImage } from './components/BackgroundImage'

export default function MusicLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col items-center justify-center relative min-h-screen pt-1 bg-zinc-50 font-raleway *:text-white">
			<BackgroundImage bgPos="top" source={'music-1.jpg'} />
			<BackgroundImage bgPos="bottom" source={'music-2.jpg'} />
			{children}
		</main>
	)
}
