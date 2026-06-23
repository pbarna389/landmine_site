import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="text-2xl text-white">
			<h2>Nincs ilyen lista!</h2>
			<Link href="./">Vissza az előző oldalra</Link>
		</div>
	)
}
