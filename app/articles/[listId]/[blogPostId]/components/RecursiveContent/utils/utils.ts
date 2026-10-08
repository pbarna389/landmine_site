export const objectAndArrayValidator = (
	data: unknown
): data is Record<string, unknown> => {
	return (
		typeof data === 'object' || (Array.isArray(data) && data !== null && data !== undefined)
	)
}
