'use client'

import { useParams } from 'next/navigation'

import { useMemo } from 'react'

import type { ArticleCardType, PaginationBase } from '@/app/schemas'

import { SkeletonCard } from '@/components'
import { useInfiniteCache } from '@/hooks/useInfiniteCache'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import type { FetchArticleDataParams } from './utils/utils'
import { fetchArticleData } from './utils/utils'
import type { PaginationState } from '@/types'

import { ArticleCard } from '../ArticleCard'

// TODO: Check the other wrappers and decide if it is worth to merge them into a reusable component

type ArticleInfiniteWrapperProps = {
	items: ArticleCardType[]
	pagination: PaginationBase | null
}

export const ArticleInfiniteWrapper = ({
	items,
	pagination
}: ArticleInfiniteWrapperProps) => {
	const { listId } = useParams<{ listId: string }>()

	const newPagination: PaginationState = useMemo(
		() => ({
			kind: 'page',
			pageInfo: pagination
		}),
		[pagination]
	)

	if (!pagination) {
		throw new Error('no pagination in articleInfiniteWrapper!')
	}

	const { entry, updateResource } = useInfiniteCache<
		ArticleCardType,
		FetchArticleDataParams
	>({
		category: 'articles',
		fetchParams: {
			id: listId
		},
		initialData: { items, pagination: newPagination },
		fetchNextPage: fetchArticleData
	})

	const { ref } = useIntersectionObserver({
		shouldFreeze:
			!entry ||
			entry.status === 'loading' ||
			entry.status === 'error' ||
			entry.status === 'exhausted',
		callback: updateResource
	})

	const refIdx = entry?.items?.length ? entry?.items?.length - 1 : 0

	const displayedItems = entry?.items ?? items

	return (
		<>
			{displayedItems.map((article, idx) => (
				<div
					className="relative overflow-hidden transition-transform duration-250 hover:scale-105 animate-imageLoadAnim"
					key={article.id}
					ref={refIdx === idx ? ref : null}
				>
					<ArticleCard {...article} idx={idx} listId={listId} />
				</div>
			))}
			{entry?.status === 'loading' && (
				<SkeletonCard
					amount={3}
					className="max-[400px]:h-45 max-[650px]:h-65 h-75 sm:h-62.5 md:h-54 lg:h-50 xl:h-40 rounded-2xl bg-white/50 animate-skeletonAnim"
				/>
			)}
		</>
	)
}
