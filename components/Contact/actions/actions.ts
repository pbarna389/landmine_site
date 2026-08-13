'use server'

export async function emailAction<T>(
	previousState: T | null,
	data: T
): Promise<T | null> {
	console.log(data)

	return data
}
