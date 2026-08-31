import type { JSX } from 'react'

import { AiFillTikTok } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { TbBrandYoutubeFilled } from 'react-icons/tb'

import type { IconNames } from '@/types/types'

type IconProps = {
	iconVars: IconNames[] | IconNames
}

const IconVariants: { [key in IconNames]: JSX.Element } = {
	facebook: <RiFacebookBoxFill key="youtube-icon" color="#1150B6" />,
	youtube: <TbBrandYoutubeFilled key={'facebook-icon'} color="#CF1111" />,
	message: <FaTelegramPlane key={'message-icon'} color="#000" />,
	telephone: <FaPhoneSquareAlt key={'telephone-icon'} color="#000" />,
	tiktok: <AiFillTikTok key={'tiktok-icon'} color="#000" />,
	arrowUp: <FaArrowUp key={'arrow-up'} color="#FFF" />
}

export const Icons = ({ iconVars }: IconProps) => {
	if (Array.isArray(iconVars)) {
		return iconVars.map((icon) => IconVariants[icon])
	}

	return IconVariants[iconVars]
}
