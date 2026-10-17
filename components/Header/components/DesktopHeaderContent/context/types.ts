type SelectedRouteType = {
	routeName: string | null
	selectedChild: number | null
}

export type RouteState = {
	isOpen: boolean
	selectedRoute: null | SelectedRouteType[]
}
