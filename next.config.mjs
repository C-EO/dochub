import nextra from 'nextra'
import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  defaultShowCopyCode: true,
  remarkPlugins: [
    [
      remarkMdxDisableExplicitJsx,
      { whiteList: ['table', 'thead', 'tbody', 'tr', 'th', 'td'] }
    ]
  ],
})

export default withNextra({
  i18n: {
    locales: ['en-US', 'es-ES', 'fr-FR', 'zh-CN', 'zh-TW', 'de-DE'],
    defaultLocale: 'en-US'
  }
})
