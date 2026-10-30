import { BlogPostModal } from './components'

// TODO: Add suspense for the loading state
// TODO: FIX THE FLICKERING

export default function BlogPostIdLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<BlogPostModal>
				<article className="flex flex-col min-h-0 h-full gap-5 p-7.5 overflow-y-auto">
					{children}
				</article>
			</BlogPostModal>
		</>
	)
}
