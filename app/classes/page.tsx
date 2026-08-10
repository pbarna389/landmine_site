import {
	IntroSection,
	PossibilitiesSection,
	PremiseSection,
	PricesSection
} from './section'
import { getClassesContent } from './server'

export default async function ClassesPage() {
	const { intro, premise, possibilities, prices } = await getClassesContent()

	return (
		<>
			<IntroSection data={intro} />
			<PremiseSection data={premise} />
			<PossibilitiesSection data={possibilities} />
			<PricesSection data={prices} />
		</>
	)
}
