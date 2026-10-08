import { BlogPostModal } from './components'

export default function BlogPostIdLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<BlogPostModal>
				<article className="flex flex-col items-center gap-5 justify-center">
					{children}
				</article>
			</BlogPostModal>
		</>
	)
}
