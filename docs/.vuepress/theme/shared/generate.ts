import { sync } from 'fast-glob'

export const useGenerateRoutes = (base: string) => {
	return (target: string) => {
		const normalizePath = (path: string) =>
			path.substring(4)
		const paths = sync(`docs/${base}/${target}/*.md`)
		return paths.map(normalizePath)
	}
}
