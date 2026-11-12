import { NextResponse } from 'next/server'

export const badRequest = (message: string) =>
	NextResponse.json({ error: message }, { status: 400 })
