import type { Metadata, Viewport } from 'next'
import {
	Cuprum,
	Montserrat,
	Nunito,
	Open_Sans,
	Raleway,
	Rubik,
	Ubuntu
} from 'next/font/google'

import { CacheContextProvider } from './context'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'

import './globals.css'

const cuprum = Cuprum({
	variable: '--font-cuprum',
	subsets: ['latin']
})

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin']
})

const openSans = Open_Sans({
	variable: '--font-open-sans',
	subsets: ['latin']
})

const rubik = Rubik({
	variable: '--font-rubik',
	subsets: ['latin']
})

const ubuntu = Ubuntu({
	variable: '--font-ubuntu',
	weight: ['300'],
	subsets: ['latin']
})

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin']
})

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin']
})

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1.0,
	maximumScale: 1.0
}

export const metadata: Metadata = {
	title: 'Gitároktatás - Gitártanár - Landmine',
	description:
		'Gitároktatás Budapesten vagy online! Gitártanár kezdőknek, haladóknak. Tanulj személyre szabott, gyakorlat-központú órákon!',
	keywords:
		'gitároktatás, gitártanár, budapest, online, kezdőknek, ár, landmine, személyre szabott, gyakorlat központú órák'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${raleway.variable} ${cuprum.variable} ${nunito.variable} ${openSans.variable} ${rubik.variable} ${ubuntu.variable} antialiased`}
			>
				<Header />
				<Hero />
				<CacheContextProvider>{children}</CacheContextProvider>
				<Footer />
			</body>
		</html>
	)
}
