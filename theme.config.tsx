import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Nitehub Documentation
      </span>
     </>
  ),
  project: {
    link: 'https://github.com/nitehub-org/',
  },
  chat: {
    link: 'https://discord.gg/tEcXZ2FVuz',
  },
  docsRepositoryBase: 'https://github.com/C-EO/nitehub-docs/blob/main/',
  footer: {
    text: <span>
        CC-BY-4.0 © {new Date().getFullYear()} <a href="https://git.c-eo.repl.co" target="_blank">Nitehub Org.</a> All rights reserved.
      </span>,
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://dochub.vercel.app${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Nitehub Documentation'} />
      <meta property="og:description" content={frontMatter.description || 'The Official Nitehub Documentation.'} />
    </>
  },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Nitehub Documentation'
      }
    }
  },
  darkMode: true,
  banner: {
    key: 'policy-updates',
    text: <a href="https://dochub.vercel.app/legal/updates" target="_blank">🆕 We have updated our site policies. Read more →</a>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 0
  },
  direction: "ltr",
  navigation: {
    prev: true,
    next: true
  },
  faviconGlyph: "📝",
  i18n: [
  { locale: 'en-US', text: 'English' },
  { locale: 'es-ES', text: 'Español' },
  { locale: 'fr-FR', text: 'Français' },
  { locale: 'zh-CN', text: '中文' },
  { locale: 'zh-TW', text: '中文' },
  { locale: 'de-DE', text: 'Deutsch' }
]
}


export default config
