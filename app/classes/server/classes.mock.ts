import { mockResponse } from '@/utils'

import { POSSIBILITIES_CONTENT } from './../section/PossibilitiesSection/constants/constants'
import { INTRO_SECTION_CONTENT } from '../section/IntroSection/constants/constants'
import { PREMISE_CONTENT } from '../section/PremiseSection/constants/constants'
import { PRICES_CONTENT } from '../section/PricesSection/constants/constants'

export const getClassesContentMock = async () => {
	const response = {
		intro: INTRO_SECTION_CONTENT,
		possibilities: POSSIBILITIES_CONTENT,
		premise: PREMISE_CONTENT,
		prices: PRICES_CONTENT
	}

	return mockResponse(response)
}
