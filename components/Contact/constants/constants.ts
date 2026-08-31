import type { ContactFormDataType } from '../schema/schema'

export const CONTACT_SCHEMA_CONSTANTS = {
	name: {
		minLength: 5,
		minErrorMessage() {
			return `A nevednek minimum ${this.minLength} karakter hosszúságúnak kell lennie`
		},
		maxLength: 50,
		maxErrorMessage() {
			return `A neved nem lehet hosszabb ${this.maxLength} karakternél`
		}
	},
	email: {
		errorMessage: 'Nem megfelelő email cím formátum'
	},
	message: {
		minLength: 25,
		minErrorMessage() {
			return `Az üzenetnek minimum ${this.minLength} karakter hosszúságúnak kell lennie`
		},
		maxLength: 500,
		maxErrorMessage() {
			return `Az üzeneted nem lehet hosszabb ${this.maxLength} karakternél`
		}
	}
}

export const CONTACT_FORM_INPUTS: {
	label: string
	name: keyof ContactFormDataType
	placeholder: string
	type: 'text' | 'email' | 'textarea'
}[] = [
	{
		name: 'name',
		label: 'név',
		type: 'text',
		placeholder: 'Név'
	},
	{
		name: 'email',
		label: 'email',
		type: 'email',
		placeholder: 'name@domain.com'
	},
	{
		name: 'message',
		label: 'üzenet',
		type: 'textarea',
		placeholder: 'Üzenet szöveg'
	}
]

export const CONTACT_FORM_DEFAULT_VALUES = {
	name: '',
	email: '',
	message: ''
}

export const CONTACT_FORM_TEXT_CONTENT = {
	error: 'Hiba',
	success: 'Sikeres üzenetküldés!',
	submit: 'Üzenet küldése'
}

export type ContactFormInputs = typeof CONTACT_FORM_INPUTS
