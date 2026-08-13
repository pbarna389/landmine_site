export type EmailActionStateType =
	{ status: 'idle' } | { status: 'success' } | { message: string; status: 'error' }
