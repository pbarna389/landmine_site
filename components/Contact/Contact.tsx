'use client'

import { CONTACT_FORM_DEFAULT_VALUES, CONTACT_FORM_INPUTS } from './constants/constants'

import { emailAction } from './actions/actions'
import { CONTACT_FORM_SCHEMA } from './schema/schema'
import { Form } from '../Form'

export default function Contact() {
	return (
		<section className="w-full min-h-1/4 bg-zinc-50 text-black text-center">
			<h2>Contact</h2>
			<Form
				defaultValues={CONTACT_FORM_DEFAULT_VALUES}
				inputs={CONTACT_FORM_INPUTS}
				schema={CONTACT_FORM_SCHEMA}
				action={emailAction}
			/>
		</section>
	)
}
