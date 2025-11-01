/**
 * COMPONENTE: MESA DIRECTIVA
 * ===========================
 * 
 * Muestra los 3 cargos principales del comité: Vocal, Secretario y Tesorero.
 * 
 * CÓMO AGREGAR LAS FOTOS REALES:
 * -------------------------------
 * Las fotos de ejemplo están en /public/images/mesa-directiva/
 * 
 * 1. Reemplaza estos archivos con las fotos reales:
 *    - /public/images/mesa-directiva/vocal.jpg
 *    - /public/images/mesa-directiva/secretario.jpg
 *    - /public/images/mesa-directiva/tesorero.jpg
 * 
 * 2. Cambia los nombres y descripciones en el array 'mesaDirectiva' abajo
 * 
 * 3. Formato de fotos recomendado:
 *    - Formato: JPG o PNG
 *    - Tamaño: 400x400px (cuadradas)
 *    - Fondo neutro preferiblemente
 */

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { UserCircle, FileText, Coins, Instagram } from "lucide-react";

// Convierte @usuario | usuario | url completa → URL de Instagram (siempre válida)
const igUrl = (h?: string): string => {
  if (!h) return "#";
  const v = h.trim();
  if (/^https?:\/\//i.test(v)) return v;
  const user = v.replace(/^@/, "");
  return `https://www.instagram.com/${encodeURIComponent(user)}/`;
};

// Devuelve el handle para mostrar en pantalla (@usuario)
const igHandle = (h?: string): string => {
  if (!h) return "";
  const v = h.trim();
  const match = v.match(/instagram\.com\/([^/?#]+)/i);
  if (match && match[1]) return `@${match[1]}`;
  return v.startsWith("@") ? v : `@${v}`;
};

// DATOS DE LA MESA DIRECTIVA
// ===========================
// IMPORTANTE: Cambia estos datos por la información real de tu comité
const mesaDirectiva = [
  {
    id: "vocal",
    cargo: "Vocal del Comité",
    nombre: "José Luis Rafael Vázquez Silva",
    // Ruta a la foto (reemplazar con foto real)
    foto: "public/images/vocal.jpg",
    instagram: "@pepebaskes",
    descripcion: "Lidera y coordina las actividades del comité estudiantil",
    icono: UserCircle,
    color: "blue"
  },
  {
    id: "secretario",
    cargo: "Secretario",
    nombre: "Eduardo Jesús Flores Navarro",
    // Ruta a la foto (reemplazar con foto real)
    foto: "public/images/secretario.jpg",
    instagram: "@lalo_fn",
    descripcion: "Gestiona la documentación y comunicaciones oficiales",
    icono: FileText,
    color: "purple"
  },
  {
    id: "tesorero",
    cargo: "Tesorero",
    nombre: "Cinthia Areli Flores Gallardo",
    // Ruta a la foto (reemplazar con foto real)
    foto: "/images/tesorera.jpg",
    instagram: "@panacinthia05",
    descripcion: "Administra los recursos financieros del comité",
    icono: Coins,
    color: "emerald"
  }
];

export function MesaDirectiva() {
  return (
    <section id="mesa-directiva" className="py-16 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Mesa Directiva
          </h2>
          <p className="text-lg text-slate-600">
            El equipo directivo que coordina todas las actividades del comité estudiantil
          </p>
        </div>

        {/* Grid de la Mesa Directiva */}
        <div className="grid md:grid-cols-3 gap-8">
          {mesaDirectiva.map((miembro) => {
            const IconComponent = miembro.icono;
            const colorClasses = {
              blue: "from-blue-600 to-blue-700",
              purple: "from-purple-600 to-purple-700",
              emerald: "from-emerald-600 to-emerald-700"
            };

            return (
              <Card key={miembro.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                {/* Header con color distintivo */}
                <div className={`h-32 bg-gradient-to-br ${colorClasses[miembro.color as keyof typeof colorClasses]} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    {/* Foto del miembro */}
                    <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                      <ImageWithFallback
                        src={miembro.foto}
                        alt={miembro.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="pt-16 pb-6 px-6 text-center">
                  <Badge className="mb-3" variant="secondary">
                    {miembro.cargo}
                  </Badge>
                  
                  <h3 className="text-slate-900 mb-2">
                    {miembro.nombre}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {miembro.descripcion}
                  </p>

                  {/* Instagram */}
                 <a
  href={igUrl(miembro.instagram)}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 hover:underline"
>
  <Instagram className="w-4 h-4" />
  <span>{igHandle(miembro.instagram)}</span>
</a>

                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
