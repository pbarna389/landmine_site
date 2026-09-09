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
}

export const CarouselWrapper = <TItem extends object>({
	components,
	timers,
	carouselData
}: CarouselWrapperProps<TItem>) => {
	const { ParentComponent, BaseComponent, SelectorComponent } = components

	const { animationTimeout, intervalTimeout } = timers

	const { idx, nextIdx, loaded, setLoaded, changeCurrentSlide } = useCarousel(
		carouselData.length,
		animationTimeout,
		intervalTimeout
	)

	const selectedData = carouselData[idx]

	useEffect(() => {
		const timeout = setTimeout(() => setLoaded(true), 0)

		return () => clearTimeout(timeout)
	}, [setLoaded, idx, animationTimeout])

	if (ParentComponent) {
		return (
			<>
				<ParentComponent.component loadState={loaded}>
					<BaseComponent
						loadState={loaded}
						setLoaded={setLoaded}
						idx={idx}
						{...selectedData}
					/>
				</ParentComponent.component>
				{SelectorComponent && (
					<SelectorComponent
						carouselTimer={intervalTimeout}
						callback={changeCurrentSlide}
						idx={idx}
						nextIdx={nextIdx}
						loaded={loaded}
						length={carouselData.length}
					/>
				)}
			</>
		)
	}

	return (
		<BaseComponent loadState={loaded} setLoaded={setLoaded} idx={idx} {...selectedData} />
	)
}
