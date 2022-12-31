import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const TITLE_WITH_TRANSLATIONS = {
  "en-US": "Nitehub Documentation",
  "es-ES": "Documentación de Nitehub",
  "fr-FR": "Documentation Nitehub",
  "zh-CN": "Nitehub 文档",
  "zh-TW": "Nitehub 文檔",
  "de-DE": "Nitehub-Dokumentation",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "es-ES": "¿Pregunta? Danos tu opinión →",
  "fr-FR": "Question? Donnez-nous votre avis →",
  "zh-CN": "题？ 给我们反馈 →",
  "zh-TW": "題？ 給我們反饋 →",
  "de-DE": "Frage? Geben Sie uns Feedback →",
};

const EDIT_THIS_PAGE_LINK_WITH_TRANSLATIONS = {
  "en-US": "Edit this page on GitHub →",
  "es-ES": "Edita esta página en GitHub →",
  "fr-FR": "Modifier cette page sur GitHub →",
  "zh-CN": "在 GitHub 上编辑此页面 →",
  "zh-TW": "在 GitHub 上編輯此頁面 →",
  "de-DE": "Bearbeiten Sie diese Seite auf GitHub →",
};

const config: DocsThemeConfig = {
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span style={ { marginLeft: ".4em", fontWeight: 800 } }>
          { TITLE_WITH_TRANSLATIONS[locale] || TITLE_WITH_TRANSLATIONS["en-US"] }
        </span>
      </>
    );
  },
  project: {
    link: "https://github.com/nitehub-org/",
  },
  chat: {
    link: "https://discord.gg/tEcXZ2FVuz",
  },
  docsRepositoryBase: "https://github.com/C-EO/dochub/blob/main/",
  footer: {
    text: (
      <span>
        <a href="/legal/license" target="_blank">
          <b>CC-BY-4.0</b>
        </a>{ " " }
        Copyright © { new Date().getFullYear() }{ " " }
        <a href="https://git.c-eo.repl.co" target="_blank">
          Nitehub Org.
        </a>{ " " }
        All rights reserved.
      </span>
    ),
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta
          property="og:url"
          content={ `https://dochub.vercel.app${asPath}` }
        />
        <meta
          property="og:title"
          content={ frontMatter.title || "Nitehub Documentation" }
        />
        <meta
          property="og:description"
          content={
            frontMatter.description || "The Official Nitehub Documentation."
          }
        />
      </>
    );
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Nitehub Documentation",
      };
    }
  },
  darkMode: true,
  banner: {
    key: "policy-updates",
    text: (
      <a href="https://dochub.vercel.app/legal/updates" target="_blank">
        🆕 We have updated our site policies. Read more →
      </a>
    ),
    dismissible: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  feedback: {
    content: () => {
      const { locale } = useRouter();
      return (
        FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
        FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
      );
    },
    labels: "feedback",
  },
  editLink: {
    text: () => {
      const { locale } = useRouter();
      return (
        EDIT_THIS_PAGE_LINK_WITH_TRANSLATIONS[locale] ||
        EDIT_THIS_PAGE_LINK_WITH_TRANSLATIONS["en-US"]
      );
    },
  },
  direction: "ltr", // Default value is 'ltr'. 'rtl' is for the 'ar' locale only.
  navigation: {
    prev: true,
    next: true,
  }, // Same as 'navigation: true'
  faviconGlyph: "📝",
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "es-ES", text: "Español" },
    { locale: "fr-FR", text: "Français" },
    { locale: "zh-CN", text: "中文" },
    { locale: "zh-TW", text: "中國人" },
    { locale: "de-DE", text: "Deutsch" },
  ],
};

export default config;
