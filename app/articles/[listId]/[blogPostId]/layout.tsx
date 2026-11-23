import { BlogPostModal } from './components'

export default function BlogPostIdLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<BlogPostModal>{children}</BlogPostModal>
		</>
	)
}
