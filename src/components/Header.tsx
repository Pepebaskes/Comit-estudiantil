/**
 * COMPONENTE: HEADER
 * ===================
 * 
 * Encabezado de la página con logo del comité y navegación.
 * 
 * CÓMO PERSONALIZAR:
 * ------------------
 * 1. LOGO: 
 *    - Reemplaza la imagen en la carpeta /public/images/logo-comite.png
 *    - El logo debe ser PNG con fondo transparente
 *    - Tamaño recomendado: 200x200px
 * 
 * 2. NOMBRE DEL COMITÉ:
 *    - Cambia "Comité Estudiantil Universitario" por el nombre de tu comité
 */

import { GraduationCap, Menu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo y Nombre del Comité */}
          <div className="flex items-center gap-4">
            {  
            <img
              src={`${import.meta.env.BASE_URL}images/logoSinFondo.png`}
              alt="Logo del comité"
              className="w-14 h-14 rounded-xl object-contain"
            />

            /* 
              AQUÍ VA TU LOGO:
              ===============
              Coloca tu logo en: /public/images/logo-comite.png
              
              Si prefieres usar el logo desde otra ubicación:
              - Cambia src="/images/logo-comite.png" 
              - Por la ruta de tu logo
            */}
            
           {/*  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>*/}
            
            <div>
              <h1 className="text-slate-900">
                COMITÉ GENERAL DE REPRESENTACIÓN ESTUDIANTIL (CRE–ITJMM El Grullo)
              </h1>
              <p className="text-sm text-slate-600">
                Representación y liderazgo estudiantil
              </p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-6">
            
            <a href="#mesa-directiva" className="text-slate-700 hover:text-blue-600 transition-colors">
              Mesa Directiva
            </a>

            <a href="#representantes" className="text-slate-700 hover:text-blue-600 transition-colors">
              Presidentes de Carrera
            </a>

            <a href="#ramas" className="text-slate-700 hover:text-blue-600 transition-colors">
              Ramas
            </a>

            {/* NUEVO MENÚ RECURSOS */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="text-slate-700 hover:text-blue-600 transition-colors">
                Recursos ▾
              </button>

              {open && (
                <div className="absolute top-full mt-3 bg-white shadow-xl rounded-xl p-3 w-56 border border-slate-200">
                  
                  <a
                    href="#descargables"
                    className="block px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    📥 Descargables
                  </a>
                {/*
                  <a
                    href="#reglamentos"
                    className="block px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    📜 Reglamentos
                  </a>

                  <a
                    href="#requisitos"
                    className="block px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    📝 ¿Cómo pertenecer?
                  </a>
                  */}

                </div>
              )}
            </div>

          </nav>

        </div>
      </div>
    </header>
  );
}
