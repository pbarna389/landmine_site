export const CreationDetails = ({
	date
}: {
	date: `${number}-${number}-${number}` | undefined
}) => {
	if (!date) return

	return <p className="text-[14px]">{date} • Bejegyzés: landmine</p>
}
