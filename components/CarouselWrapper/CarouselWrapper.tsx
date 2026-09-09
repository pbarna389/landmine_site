'use client'

import { useEffect } from 'react'

import { useCarousel } from '@/hooks/useCarousel'

type CarouselWrapperProps<TData extends object> = {
	carouselData: TData[]
	components: {
		BaseComponent: React.FunctionComponent<
			TData & {
				idx?: number
				loadState?: boolean
				setLoaded?: React.Dispatch<React.SetStateAction<boolean>>
			}
		>
		ParentComponent?: {
			component: React.FunctionComponent<
				React.PropsWithChildren & {
					loadState: boolean
				}
			>
		}
		SelectorComponent?: React.FunctionComponent<{
			callback: (idx: number) => void
			carouselTimer: number
			idx: number
			length: number
			loaded: boolean
			nextIdx: number
		}>
	}
	timers: {
		animationTimeout: number
		intervalTimeout: number
	}
	shouldHandleLoading?: boolean
}

export const CarouselWrapper = <TItem extends object>({
	components,
	timers,
	carouselData,
	shouldHandleLoading = true
}: CarouselWrapperProps<TItem>) => {
	const { ParentComponent, BaseComponent, SelectorComponent } = components

	const { animationTimeout, intervalTimeout } = timers

	const { idx, nextIdx, loaded, setLoaded, changeCurrentSlide } = useCarousel(
		carouselData.length,
		animationTimeout,
		intervalTimeout
	)

	useEffect(() => {
		if (!shouldHandleLoading) return

		const timeout = setTimeout(() => setLoaded(true), 0)

		return () => clearTimeout(timeout)
	}, [setLoaded, idx, shouldHandleLoading])

	const selectedData = carouselData[idx]

	const content = (
		<BaseComponent {...selectedData} loadState={loaded} setLoaded={setLoaded} idx={idx} />
	)
	const selector = SelectorComponent ? (
		<SelectorComponent
			carouselTimer={intervalTimeout}
			callback={changeCurrentSlide}
			idx={idx}
			nextIdx={nextIdx}
			loaded={loaded}
			length={carouselData.length}
		/>
	) : null

	return (
		<>
			{ParentComponent ? (
				<ParentComponent.component loadState={loaded}>{content}</ParentComponent.component>
			) : (
				content
			)}
			{selector}
		</>
	)
}
