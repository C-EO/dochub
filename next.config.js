import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx'

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  defaultShowCopyCode: true,
  remarkPlugins: [
    [
      remarkMdxDisableExplicitJsx,
      { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td', 'h3', 'a'] }
    ]
  ]
})

module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'es-ES', 'fr-FR', 'zh-CN', 'zh-TW', 'de-DE'],
    defaultLocale: 'en-US'
  }
})
