import fs from 'fs'
import prettier from 'prettier'

const SitemapGeneratedDate = new Date().toISOString().slice(0, 10)
const DOMAIN = 'https://perfan.vercel.app'

const formatting = (target) => prettier.format(target, { parser: 'html' })

let pages = ['/']
pages = pages.map((page) => DOMAIN + page)

const pageSitemap = pages
  .map(
    (page) => `
      <url>
        <loc>${page}</loc>
        <lastmod>${SitemapGeneratedDate}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${page === 'https://perfan.vercel.app' ? 1 : 0.8}</priority>
      </url>
    `,
  )
  .join('')

const geneateSitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          ${pageSitemap}
        </urlset>`

const formattedSitemap = await formatting(geneateSitemap)

fs.writeFileSync('./public/sitemap.xml', formattedSitemap, 'utf8')
