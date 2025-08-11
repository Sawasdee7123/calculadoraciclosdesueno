import type { Metadata } from 'next';
import { alternatesForEsPath } from './components/hreflang';
import HomeClient from './HomeClient';

export const generateMetadata = (): Metadata => ({
  alternates: alternatesForEsPath('/'),
});

export default function Page() {
  return <HomeClient />;
}
