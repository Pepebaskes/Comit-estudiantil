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

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo y Nombre del Comité */}
          <div className="flex items-center gap-4">
            {  
            <img
              src="/images/logo.png"   // ✅ desde public/
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
                COMITÉ GENERAL DE REPRESENTACIÓN ESTUDIANTIL (CGRE–ITJMM El Grullo)

              </h1>
              <p className="text-sm text-slate-600">
                Representación y liderazgo estudiantil
              </p>
            </div>
          </div>

          {/* Navegación (opcional - puedes agregar links aquí) */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#mesa-directiva" className="text-slate-700 hover:text-blue-600 transition-colors">
              Mesa Directiva
            </a>
            <a href="#representantes" className="text-slate-700 hover:text-blue-600 transition-colors">
              Representantes
            </a>
            <a href="#ramas" className="text-slate-700 hover:text-blue-600 transition-colors">
                Ramas
              </a>

          </nav>
        </div>
      </div>
    </header>
  );
}
