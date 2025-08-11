// Import the CalculatorInstructions component, which renders the embed instructions and FAQ
import CalculatorInstructions from './CalculatorInstructions';

import { alternatesForEsPath } from '../components/hreflang';

// Import Metadata type from Next.js for static site metadata
import type { Metadata } from 'next';

// Static metadata for SEO, Open Graph, Twitter Card, and canonical link
export const metadata = {
  alternates: alternatesForEsPath('/incluir-calculadora-sueno-en-mi-web'),
  title: 'Cómo añadir la Calculadora de Sueño a tu página web',
  description: 'Instrucciones rápidas y sencillas para incluir la Calculadora de Ciclos de Sueño gratis en tu web o blog mediante un simple código.',

  openGraph: {
    title: 'Cómo añadir la Calculadora de Sueño a tu página web',
    description: 'Instrucciones rápidas y sencillas para incluir la Calculadora de Ciclos de Sueño gratis en tu web o blog mediante un simple código.',
    url: 'https://calculadoraciclosdesueno.com/incluir-calculadora-sueno-en-mi-web',
    images: [
      {
        url: 'https://calculadoraciclosdesueno.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Sueño',
      },
    ],
    siteName: 'Calculadora de Sueño',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Cómo añadir la Calculadora de Sueño a tu página web',
    description: 'Instrucciones rápidas y sencillas para incluir la Calculadora de Ciclos de Sueño gratis en tu web o blog mediante un simple código.',
    images: ['https://calculadoraciclosdesueno.com/og-image.png'],
  },
};

// Page component for /incluir-calculadora-sueno-en-mi-web, renders the instructions and FAQ
export default function AddCalculatorPage() {
  return <CalculatorInstructions />;
}
