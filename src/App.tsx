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
 * - Descargables: Documentos oficiales en formato PDF
 * 
 * NOTA:
 * - Los archivos PDF deben estar dentro de:
 *   public/docs/
 * - Se acceden desde el navegador como:
 *   /docs/nombre-del-archivo.pdf
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

      {/* ============================= */}
      {/* SECCIÓN DE DESCARGABLES      */}
      {/* ============================= */}

      <section id="descargables" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Descargables Oficiales
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Documento oficial relacionado con las normas para rama del CRE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-200">
              
              <div className="mb-4 text-blue-600 text-4xl">
                📜
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Normas para Rama del CRE
              </h3>

              <p className="text-slate-600 mb-6 text-sm">
                Documento oficial que establece los lineamientos para la organización y funcionamiento de las ramas del CRE.
              </p>

            <a
               href={`${import.meta.env.BASE_URL}docs/NormasParaRamaDelCRE.pdf`}
              download
              className="block w-full text-center bg-blue-800 hover:bg-blue-900 text-black font-semibold py-3 rounded-xl transition transform hover:-translate-y-1 hover:shadow-xl"
              >
              Descargar Archivo
          </a>

            </div>

          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* SECCIONES FUTURAS (DESACTIVADAS TEMPORALMENTE)  */}
      {/* ================================================= */}

      {/*
      <section id="reglamentos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Reglamentos
          </h2>
          <p className="text-slate-600">
            Consulta la normativa que regula el funcionamiento del comité.
          </p>
        </div>
      </section>

      <section id="requisitos" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Cómo pertenecer al comité?
          </h2>
          <p className="text-slate-600">
            Revisa los requisitos y el proceso para integrarte al CGRE–ITJMM.
          </p>
        </div>
      </section>
      */}

      {/* Footer */}
      <Footer />

    </div>
  );
}
