/**
 * COMPONENTE: FOOTER
 * ===================
 * 
 * Pie de página con información adicional del comité.
 * 
 * CÓMO PERSONALIZAR:
 * ------------------
 * - Cambia los links de redes sociales
 * - Actualiza la información de contacto
 * - Modifica el año y nombre de la universidad
 */

import {  Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información del comité */}
          <div>
            <h3 className="mb-4">Comité Estudiantil</h3>
            <p className="text-slate-400 mb-4">
              Trabajando por y para los estudiantes. Representación, 
              compromiso y acción en favor de la comunidad universitaria.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4">Contacto</h3>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>comiteestudiantiltsjelgrullo@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+52 (566) 771-8342</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Campus Tecnologíco El Grullo</span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="mb-4">Síguenos</h3>
            <div className="flex gap-4">
            
            {/* Facebook */}
             {/*  <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>*/}
              <a 
                href="https://www.instagram.com/cre_itjmm/" 
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
             {/* <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              */}
              
            </div>
            <p className="text-sm text-slate-500 mt-6">
              @cre_itjmm
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>© 2025 Comité Estudiantil Universitario. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
