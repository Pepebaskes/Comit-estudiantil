/**
 * PÁGINA WEB DEL COMITÉ ESTUDIANTIL UNIVERSITARIO
 * ================================================
 * * Esta es la página principal que muestra el comité estudiantil con su organigrama.
 * * ESTRUCTURA:
 * - Header: Logo y título del comité
 * - Hero Section: Introducción al comité
 * - Mesa Directiva: Vocal, Secretario y Tesorero
 * - Representantes de Carrera: Cards con todos los representantes
 * - Descargables: Documentos oficiales en formato PDF
 * * NOTA:
 * - Los archivos PDF deben estar dentro de:
 * public/docs/
 * - Se acceden desde el navegador como:
 * /docs/nombre-del-archivo.pdf
 */

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MesaDirectiva } from "./components/MesaDirectiva";
import { RepresentantesCarreras } from "./components/RepresentantesCarreras";
import { Footer } from "./components/Footer";
import { PerfilMiembro } from "./pages/perfilMiembro";

export default function App() {

  // ==========================================
  // DATOS DE LOS DESCARGABLES
  // ==========================================
  // Para agregar un nuevo archivo, simplemente añade un objeto más a esta lista.
  const documentos = [
    {
      titulo: "Normas para Rama del CRE",
      descripcion: "Documento oficial que establece los lineamientos para la organización y funcionamiento de las ramas del CRE.",
      archivo: "NormasParaRamaDelCRE.pdf"
    },
    {
      titulo: "Reglamento de cero tolerancia",
      descripcion: "Reglamento que establece las medidas disciplinarias para garantizar un ambiente seguro y respetuoso dentro del comité estudiantil.",
      archivo: "ReglamentoCeroTolerancia.pdf"
    },

     {
      titulo: "Reglamento para Presidente de Carrera",
      descripcion: "Reglamento que establece las responsabilidades, funciones y requisitos para el cargo de Presidente de Carrera dentro del comité estudiantil.",
      archivo: "ReglamentoYParaPresidenteDeCarrera.pdf"
    },
    // --- ESPACIO PARA NUEVO ARCHIVO (Descomentar y llenar) ---
    /*
    {
      titulo: "Nombre del Nuevo Documento",
      descripcion: "Descripción breve del documento.",
      archivo: "NombreDelArchivo.pdf"
    },
    */
  ];

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
      {/* SECCIÓN DE DESCARGABLES       */}
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

          {/* Aquí usamos CSS Grid para ponerlos uno al lado del otro.
            md:grid-cols-3 significa que en pantallas medianas/grandes habrá 3 columnas.
          */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Renderizado dinámico tipo React (Mapping) */}
            {documentos.map((doc, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-slate-200"
              >
                <div className="mb-4 text-blue-600 text-4xl">
                  📜
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {doc.titulo}
                </h3>

                <p className="text-slate-600 mb-6 text-sm">
                  {doc.descripcion}
                </p>

                <a
                  href={`${import.meta.env.BASE_URL}docs/${doc.archivo}`}
                  download
                  className="block w-full text-center bg-blue-800 hover:bg-blue-900 text-black font-semibold py-3 rounded-xl transition transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Descargar Archivo
                </a>
              </div>
            ))}

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