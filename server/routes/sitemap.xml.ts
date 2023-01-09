// 提高谷歌的 seo
import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async event => {
	const docs = await serverQueryContent(event).find()
	const sitemap = new SitemapStream({
		hostname: 'https://qk3.deno.dev'
	})

	for (const doc of docs) {
		sitemap.write({
			url: doc._path,
			changefreq: 'monthly'
		})
	}

	sitemap.end()

	return streamToPromise(sitemap)
})
