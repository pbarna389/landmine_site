import { DiaryModal } from './components'

export default async function MusicDiaryLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<DiaryModal>{children}</DiaryModal>
		</>
	)
}
