export const generateLinkRoute = (arr: string[], idx: number): string => {
	return arr.slice(0, idx + 1).join('/')
}
