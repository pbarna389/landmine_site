'use client'

import {
	CONTACT_FORM_DEFAULT_VALUES,
	CONTACT_FORM_INPUTS,
	CONTACT_FORM_TEXT_CONTENT
} from './constants/constants'

import { emailAction } from './actions/actions'
import { CONTACT_FORM_SCHEMA } from './schema/schema'
import { Form } from '../Form'

export default function Contact() {
	return (
		<section className="w-full min-h-1/4 bg-zinc-50 p-8 text-black text-center space-y-15 sm:space-y-7.5 shadow-2xl">
			<h2 className="capitalize text-xl">Kapcsolat</h2>
			<Form
				defaultValues={CONTACT_FORM_DEFAULT_VALUES}
				inputs={CONTACT_FORM_INPUTS}
				schema={CONTACT_FORM_SCHEMA}
				messageTexts={CONTACT_FORM_TEXT_CONTENT}
				action={emailAction}
			/>
		</section>
	)
}
