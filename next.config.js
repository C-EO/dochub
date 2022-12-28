const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'es-ES', 'fr-FR', 'zh-CN', 'zh-TW', 'de-DE'],
    defaultLocale: 'en-US'
  }
})
