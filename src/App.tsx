/**
 * PÁGINA WEB DEL COMITÉ ESTUDIANTIL UNIVERSITARIO
 * ================================================
 * 
 * Esta es la página principal que muestra el comité estudiantil con su organigrama.
 * 
 * ESTRUCTURA:
 * - Header: Logo y título del comité
 * - Hero Section: Introducción al comité
 * - Mesa Directiva: Vocal, Secretario y Tesorero
 * - Representantes de Carrera: Cards con todos los representantes
 * 
 * NOTA: Este archivo importa los componentes desde /components
 */

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MesaDirectiva } from "./components/MesaDirectiva";
import { RepresentantesCarreras } from "./components/RepresentantesCarreras";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header con logo y navegación */}
      <Header />
      
      {/* Sección Hero de introducción */}
      <HeroSection />
      
      {/* Mesa Directiva del Comité */}
      <MesaDirectiva />
      
      {/* Representantes de cada carrera */}
      <RepresentantesCarreras />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
