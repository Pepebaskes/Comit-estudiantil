/**
 * COMPONENTE: HERO SECTION
 * =========================
 * 
 * Sección principal de introducción al comité estudiantil.
 * 
 * CÓMO PERSONALIZAR:
 * ------------------
 * - Cambia el texto de bienvenida y descripción
 * - Puedes cambiar la imagen de fondo si lo deseas
 */

import { Users, Target, Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="flex justify-center items-center mb-8">
      <img
       src="/images/logoSinFondo.png"
        alt="Logo del Comité"
        className="w-48 h-48 object-contain drop-shadow-xl"
          />
          </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-slate-900 mb-6">
            Organización del Comité Estudiantil
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Conoce a los representantes que trabajan día a día para mejorar 
            la experiencia universitaria de todos los estudiantes.
          </p>

          {/* Valores del comité */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Representación</h3>
              <p className="text-slate-600">
                Damos voz a todos los estudiantes
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Objetivos Claros</h3>
              <p className="text-slate-600">
                Trabajamos con metas definidas
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-slate-900 mb-2">Compromiso</h3>
              <p className="text-slate-600">
                Dedicados al bienestar estudiantil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
