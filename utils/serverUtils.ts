import { NextResponse } from 'next/server'

export const badRequest = (message: string) =>
	NextResponse.json({ error: message }, { status: 400 })

export const validateRequest = (nextPage: number, pageSize: number, maxPage: number) => {
	if (
		!Number.isInteger(pageSize) ||
		pageSize <= 0 ||
		!Number.isInteger(nextPage) ||
		nextPage <= 0 ||
		nextPage > maxPage
	) {
		return false
	}

	return true
}
