import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  defaultShowCopyCode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'avatars.githubusercontent.com'],
  },
})

export default withNextra({
  i18n: {
    locales: ['en-US', 'es-ES', 'fr-FR', 'zh-CN', 'zh-TW', 'de-DE'],
    defaultLocale: 'en-US'
  }
})
