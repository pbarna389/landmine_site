import { z } from 'zod'

export const youtubeThumbnailSchema = z.object({
	height: z.number(),
	url: z.string(),
	width: z.number()
})

export const youtubeThumbnailsSchema = z.partialRecord(
	z.enum(['default', 'medium', 'high', 'standard', 'maxres']),
	youtubeThumbnailSchema
)

export const youtubeDetailsSchema = z.object({
	etag: z.string(),
	kind: z.templateLiteral(['youtube#', z.string()])
})

export const youtubeStatusSchema = z.object({
	privacyStatus: z.enum(['private', 'public', 'unlisted'])
})

export const youtubePlaylistSnippetSchema = z.object({
	channelId: z.string(),
	channelTitle: z.string(),
	description: z.string(),
	playlistId: z.string(),
	position: z.number(),
	publishedAt: z.string(),
	resourceId: z.object({
		kind: z.literal('youtube#video'),
		videoId: z.string()
	}),
	thumbnails: youtubeThumbnailsSchema,
	title: z.string(),
	videoOwnerChannelId: z.string().optional(),
	videoOwnerChannelTitle: z.string().optional()
})

export const youtubePlaylistItemSchema = youtubeDetailsSchema.extend({
	id: z.string(),
	snippet: youtubePlaylistSnippetSchema,
	status: youtubeStatusSchema
})

export const youtubePlaylistResponseSchema = z.object({
	items: z.array(youtubePlaylistItemSchema),
	nextPageToken: z.string().nullish()
})

export type YoutubePlaylistResponse = z.infer<typeof youtubePlaylistResponseSchema>

export type YoutubePlayListItem = z.infer<typeof youtubePlaylistItemSchema>
