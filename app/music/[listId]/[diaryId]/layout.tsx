import { DiaryModal } from './components'

export default async function MusicDiaryLayout({ children }: React.PropsWithChildren) {
	return (
		<section className="flex flex-col min-h-0 h-full gap-5 p-7.5 overflow-y-auto">
			<DiaryModal>{children}</DiaryModal>
		</section>
	)
}
