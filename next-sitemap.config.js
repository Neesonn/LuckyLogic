/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://luckylogic.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://luckylogic.com/server-sitemap.xml', // Optional: for dynamic sitemap
    ],
  },
  exclude: ['/404', '/500'], // Add any pages you want to exclude
  generateIndexSitemap: false, // Set to true if you expect to have more than 50,000 URLs
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
};
