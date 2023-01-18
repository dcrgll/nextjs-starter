/** @type {import('next-sitemap').IConfig} */
const config = require('./config')

module.exports = {
  siteUrl: config.site_url,
  generateRobotsTxt: true
}
