'use client';

import { useEffect, useState } from 'react';

const COOKIE_NAME = 'cookie_consent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  // Show banner if not accepted
  useEffect(() => {
    const consent = typeof window !== 'undefined' ? localStorage.getItem(COOKIE_NAME) : null;
    setVisible(!consent);
  }, []);

  // Accept cookies
  const handleAccept = () => {
    localStorage.setItem(COOKIE_NAME, 'accepted');
    setVisible(false);
  };

  // Close banner (counts as decline)
  const handleClose = () => {
    localStorage.setItem(COOKIE_NAME, 'declined');
    setVisible(false);
    // TODO: Disable analytics/ads if you implement this logic
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de uso de cookies"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        background: 'rgba(30, 30, 30, 0.95)',
        color: '#f4d35e',
        padding: '1.2rem 1rem 1.2rem 1rem',
        boxShadow: '0 -4px 24px 0 rgba(0,0,0,0.17)',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontSize: '0.9rem', color: '#fff', marginRight: '0.7rem', flex: 1 }}>
        Utilizamos cookies propias y de terceros para analizar el tráfico y mostrar publicidad relevante. Al hacer clic en “Aceptar”, permites su uso. Consulta nuestra{' '}
        <a href="/privacidad" style={{ color: '#f4d35e', textDecoration: 'underline' }}>
          Política de Privacidad
        </a>.
      </span>
      <button
        onClick={handleAccept}
        style={{
          margin: '0 0.5rem',
          padding: '0.5rem 1.1rem',
          background: '#f4d35e',
          color: '#1e1e1e',
          border: 'none',
          borderRadius: '1.4rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(244,211,94,0.18)'
        }}
      >
        Aceptar
      </button>
      <button
        onClick={handleClose}
        aria-label="Cerrar"
        style={{
          background: 'transparent',
          color: '#f4d35e',
          border: 'none',
          fontSize: '1.5rem',
          marginLeft: '0.8rem',
          cursor: 'pointer',
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}
