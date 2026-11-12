import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getArticlePaginatedContent } from '@/app/articles/server'
import { articleListIdParamSchema } from '@/app/schemas'

import { badRequest } from '@/utils/utils'

export async function GET(request: NextRequest) {
	const params = request.nextUrl.searchParams

	const listId = params.get('listId')
	const currentPage = params.get('currentPage')
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
		return badRequest('Invalid page size format!')
	}

	if (!Number.isInteger(convertedCurrentPage)) {
		return badRequest('Invalid current page format!')
	}

	const data = await getArticlePaginatedContent(
		parsedListId.data,
		convertedPageSize,
		convertedCurrentPage
	)

	if (data.pagination === null) {
		return badRequest('Invalid pagination data')
	}

	return NextResponse.json(data)
}
