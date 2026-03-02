import {
	IntroSection,
	PossibilitiesSection,
	PremiseSection,
	PricesSection
} from './section'

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
			<IntroSection />
			<PremiseSection />
			<PossibilitiesSection />
			<PricesSection />
		</main>
	)
}
