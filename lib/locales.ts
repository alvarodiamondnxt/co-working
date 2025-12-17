export const locales = ['es', 'en', 'pt', 'fr'] as const;
export type Locale = (typeof locales)[number];

