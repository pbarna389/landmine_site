import { BlogPostModal } from './components'

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
