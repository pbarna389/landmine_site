export type ActionStateType =
	{ status: 'idle' } | { status: 'success' } | { message: string; status: 'error' }
