import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getArticlePaginatedContent } from '@/app/articles/server'
import { articleListIdParamSchema } from '@/app/schemas'

const badRequest = (message: string) =>
	NextResponse.json({ error: message }, { status: 400 })

export async function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams

	const listId = params.get('listId')
	const currentPage = params.get('page')
	const pageSize = params.get('pageSize')

	if (!listId || currentPage === null || pageSize === null) {
		return badRequest('Missing required query parameters')
	}
	const parsedListId = articleListIdParamSchema.safeParse(listId)

	if (!parsedListId.success) {
		return badRequest('Invalid article category')
	}

	const convertedPageSize = Number(pageSize)
	const convertedCurrentPage = Number(currentPage)

	if (!Number.isInteger(convertedPageSize)) {
		console.log('pageSize is in invalid format!!')
		return badRequest('Invalid page size format!')
	}

	if (!Number.isInteger(convertedCurrentPage)) {
		console.log('currentPage is in invalid format!!')
		return badRequest('Invalid current page format!')
	}

	const data = await getArticlePaginatedContent(
		parsedListId.data,
		convertedPageSize,
		convertedCurrentPage
	)

	if (data.pagination === null) {
		console.log('no pagination in route handler!')
		return badRequest('Invalid pagination data')
	}

	return NextResponse.json(data)
}
