import { Icons } from '@/components/Icons'

import { MobileLink } from './MobileLink'
import type { NavItem } from '../../constants/constants'

type MobileLinkExpanderProps = {
	handleClick: () => void
	link: NavItem
}

export const MobileLinkExpander = ({ handleClick, link }: MobileLinkExpanderProps) => {
	return (
		<li className="relative bg-header-mobile-bg border border-header-mobile-border w-full flex item-center justify-center">
			<MobileLink link={link} callback={handleClick} />
			<button
				type="button"
				className="absolute flex items-center justify-center -translate-y-1/2 top-1/2 right-0 w-7.5 border-2 border-black h-full"
				onClick={() => console.log(`recursion starter - route: ${link.text}`)}
			>
				<Icons iconVars={'chevronRight'} />
			</button>
		</li>
	)
}
