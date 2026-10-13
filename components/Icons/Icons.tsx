import type { JSX } from 'react'

import { AiFillTikTok } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { TbBrandYoutubeFilled } from 'react-icons/tb'

import type { IconNames } from '@/types/types'

//TODO: Icons refactoring: IconVariants should accept parameters and be able to customize the icons by the provided props

type IconProps = {
	iconVars: IconNames[] | IconNames
}

const IconVariants: { [key in IconNames]: JSX.Element } = {
	facebook: <RiFacebookBoxFill key={'icon-ri-youtube-icon'} color="#1150B6" />,
	youtube: <TbBrandYoutubeFilled key={'icon-tb-facebook-icon'} color="#CF1111" />,
	message: <FaTelegramPlane key={'icon-fa-message-icon'} color="#000" />,
	telephone: <FaPhoneSquareAlt key={'icon-fa-telephone-icon'} color="#000" />,
	tiktok: <AiFillTikTok key={'icon-ai-tiktok-icon'} color="#000" />,
	arrowUp: <FaArrowUp key={'icon-fa-arrow-up'} color="#FFF" />,
	home: <FaHome key={'icon-fa-home'} color="#000" size={25} />,
	chevronLeft: <FaChevronLeft key={'icon-fa-chevronLeft'} size={25} />,
	chevronDown: <FaChevronDown key={'icon-fa-chevronDown'} size={15} />
}

export const Icons = ({ iconVars }: IconProps) => {
	if (Array.isArray(iconVars)) {
		return iconVars.map((icon) => IconVariants[icon])
	}

	return IconVariants[iconVars]
}
