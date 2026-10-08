import { BlogPostModal } from './components'

export default function BlogPostIdLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<BlogPostModal>
				<article className="flex flex-col gap-5 justify-center p-7.5">{children}</article>
			</BlogPostModal>
		</>
	)
}
