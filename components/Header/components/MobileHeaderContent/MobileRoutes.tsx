import { MobileLink } from './MobileLink'
import { NAV_ELEMENTS } from '../../constants'

type MobileRoutesProps = {
	handleClick: () => void
}

export const MobileRoutes = ({ handleClick }: MobileRoutesProps) => {
	return NAV_ELEMENTS.map((link) => (
		<MobileLink
			key={`mobile-navbar-link-${link.text}`}
			link={link}
			callback={handleClick}
		/>
	))
}
