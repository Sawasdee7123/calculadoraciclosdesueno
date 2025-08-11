'use client';

import styles from './page.module.css';
import SleepCalculator from "./components/SleepCalculator";

export default function HomeClient() {
  return (
    <main
      className="main-style"
      aria-label="Página principal de la Calculadora de Sueño"
      style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className={styles.title}>
        Calcula tus ciclos de sueño para despertar renovado
      </h1>

      <p className={styles.description}>
        Descubre a qué hora debes dormir o despertar para completar ciclos de sueño saludables.
        Nuestra calculadora de sueño te ayuda a mejorar tu descanso y bienestar.
      </p>

      <SleepCalculator />
    </main>
  );
}
