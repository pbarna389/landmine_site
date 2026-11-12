import { z } from 'zod'

import { paginationSchema, staticImageDataSchema } from '../shared/schemas'

export const musicAlbumSchema = z.object({
	id: z.string(),
	title: z.string(),
	format: z.string(),
	releaseDate: z.number(),
	style: z.string(),
	image: staticImageDataSchema,
	href: z.string(),
	details: z.string()
})

export const musicAlbumListSchema = z.array(musicAlbumSchema)

export const musicListResponseSchema = z.object({
	items: musicAlbumListSchema,
	pagination: paginationSchema
})

export type MusicAlbumType = z.infer<typeof musicAlbumSchema>
export type MusicAlbumCollectionType = z.infer<typeof musicAlbumListSchema>
export type MusicListResponseSchema = z.infer<typeof musicListResponseSchema>
