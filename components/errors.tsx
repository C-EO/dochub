import { useRouter } from "next/router";

const NOT_FOUND_WITH_TRANSLATIONS = {
    "en-US": "404 - This page could not be found.",
    "es-ES": "404 - No se pudo encontrar esta página.",
    "fr-FR": "404 - Cette page est introuvable.",
    "zh-CN": "404 - 找不到此页面。",
    "zh-TW": "404 - 找不到此頁面。",
    "de-DE": "404 - Diese Seite konnte nicht gefunden werden.",
};

const SERVER_ERROR_WITH_TRANSLATIONS = {
    "en-US": "500 - Internal Server Error",
    "es-ES": "500 - Error interno de servidor",
    "fr-FR": "500 - Erreur interne du serveur",
    "zh-CN": "500内部服务器错误",
    "zh-TW": "500內部服務器錯誤",
    "de-DE": "500 - Interner Serverfehler",
};

function NotFound() {
    const { locale } = useRouter();
    return (
      NOT_FOUND_WITH_TRANSLATIONS[locale] ||
      NOT_FOUND_WITH_TRANSLATIONS["en-US"]
    );
};

function ServerError() {
    const { locale } = useRouter();
    return (
      SERVER_ERROR_WITH_TRANSLATIONS[locale] ||
      SERVER_ERROR_WITH_TRANSLATIONS["en-US"]
    );
};

export { NotFound, ServerError };
