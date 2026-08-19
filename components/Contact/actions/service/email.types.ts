import type { ContactFormDataType } from '../../schema/schema'
import type { ActionStateType } from '../../types'

export type EmailProvider = {
	sendContactEmail: (data: ContactFormDataType) => Promise<ActionStateType>
}
