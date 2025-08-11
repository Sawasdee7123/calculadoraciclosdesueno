// NO 'use client'
import { LanguageRouteMap } from './LanguageRouteMap';

const SITE_ES = 'https://calculadoraciclosdesueno.com';
const SITE_EN = 'https://mysleepcalculator.net';

/** Build <alternates> for a given ES path defined in LanguageRouteMap.es */
export function alternatesForEsPath(esPath: string) {
  // Find the EN key whose ES value equals esPath
  const enPath = Object.entries(LanguageRouteMap.es).find(
    ([, v]) => v === esPath
  )?.[0];

  if (!enPath) {
    throw new Error(`Missing EN mapping for ES path "${esPath}" in LanguageRouteMap.`);
  }

  return {
    canonical: `${SITE_ES}${esPath}`,
    languages: {
      es: `${SITE_ES}${esPath}`,
      en: `${SITE_EN}${enPath}`,
      'x-default': `${SITE_EN}${enPath}`,
    },
  };
}
