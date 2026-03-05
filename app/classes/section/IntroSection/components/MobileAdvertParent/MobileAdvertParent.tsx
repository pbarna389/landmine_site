type MobileAdvertParentProps = React.PropsWithChildren & {
	loadState: boolean
}
export const MobileAdvertParent = ({ children, loadState }: MobileAdvertParentProps) => {
	return (
		<div
			className={`space-y-4 text-center transition-opacity duration-750 ${loadState ? 'opacity-100' : 'opacity-0'}`}
		>
			{children}
		</div>
	)
}
