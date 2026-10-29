import { redirect } from 'next/navigation'

import { getMusicContent } from './server'

export default async function MusicPage() {
	const { subpageData } = await getMusicContent()
	const lastElement = subpageData.at(-1)

	if (lastElement) {
		redirect(`./music/${lastElement.id}`)
	}
}
