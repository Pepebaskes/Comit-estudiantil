/**
 * COMPONENTE: REPRESENTANTES DE CARRERAS
 * ========================================
 * 
 * Muestra todos los representantes de las 8 carreras universitarias.
 * 
 * CÓMO AGREGAR LAS FOTOS REALES:
 * -------------------------------
 * Las fotos de ejemplo están en /public/images/representantes/
 * 
 * 1. Reemplaza estos archivos con las fotos reales:
 *    - /public/images/representantes/informatica.jpg
 *    - /public/images/representantes/innovacion-agricola.jpg
 *    - /public/images/representantes/gestion-empresarial.jpg
 *    - /public/images/representantes/arquitectura.jpg
 *    - /public/images/representantes/electromecanica.jpg
 *    - /public/images/representantes/industrial.jpg
 *    - /public/images/representantes/gestion-empresarial-mixta.jpg
 *    - /public/images/representantes/industrial-mixta.jpg
 * 
 * 2. Cambia los nombres, emails y semestres en el array 'representantes' abajo
 * 
 * 3. Formato de fotos recomendado:
 *    - Formato: JPG o PNG
 *    - Tamaño: 400x400px (cuadradas)
 *    - Fondo neutro preferiblemente
 */

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Instagram } from "lucide-react"; // 👈 agregamos Instagram aquí

// Convierte @usuario | usuario | url completa → URL de Instagram (siempre válida)
const igUrl = (h?: string): string => {
  if (!h) return "#";
  const v = h.trim();
  if (/^https?:\/\//i.test(v)) return v;              // ya es URL
  const user = v.replace(/^@/, "");                    // quita @ si viene
  return `https://www.instagram.com/${encodeURIComponent(user)}/`;
};

// Devuelve el handle para mostrar en pantalla (@usuario)
const igHandle = (h?: string): string => {
  if (!h) return "";
  const v = h.trim();

  // Si viene URL, intenta extraer el usuario con una regex (sin usar URL/replaceAll)
  const m = v.match(/instagram\.com\/([^/?#]+)/i);
  if (m && m[1]) return `@${m[1]}`;

  // Si viene @usuario o usuario suelto
  return v.startsWith("@") ? v : `@${v}`;
};

// DATOS DE LOS REPRESENTANTES
// ============================
// IMPORTANTE: Cambia estos datos por la información real de tus representantes
const representantes = [
  {
    id: "informatica",
    carrera: "Ingeniería Informática",
    nombre: "Román Emmanuel Castañeda Barboza",
    // Ruta a la foto (reemplazar con foto real)
    foto: "/images/repreInfo.jpg",
    instagram: "@code.remstar",
    semestre: "5to Semestre",
    colorAccent: "bg-blue-500"
  },
  {
    id: "innovacion-agricola",
    carrera: "Ingeniería Innovación Agrícola",
    nombre: "Ricardo Flores Rosas",
    foto: "/images/repreAgro.jpg",
    instagram: "flores.11ricardo",
    semestre: "3er Semestre",
    colorAccent: "bg-green-500"
  },
  {
    id: "gestion-empresarial",
    carrera: "Ingeniería Gestión Empresarial",
    nombre: "Omar Iván Hernández Ibarra",
    foto: "/images/repreGestion.jpg",
    instagram: "@omar_._hernandez",
    semestre: "3er Semestre",
    colorAccent: "bg-purple-500"
  },
  {
    id: "arquitectura",
    carrera: "Arquitectura",
    nombre: "Ricardo Miguel Villalpando Suárez",
    foto: "/images/repreArqui.jpg",
    instagram: "ricardoomvs",
    semestre: "1er Semestre",
    colorAccent: "bg-orange-500"
  },
  {
    id: "electromecanica",
    carrera: "Ingeniería Electromecánica",
    nombre: "Pendiente",
    foto: "/images/representantes/electromecanica.jpg",
    instagram: "",
    semestre: "",
    colorAccent: "bg-yellow-500"
  },
  {
    id: "industrial",
    carrera: "Ingeniería Industrial",
    nombre: "Pendiente",
    foto: "/images/representantes/industrial.jpg",
    instagram: "",
    semestre: "",
    colorAccent: "bg-red-500"
  },
  {
    id: "gestion-empresarial-mixta",
    carrera: "Ingeniería Gestión Empresarial Mixta",
    nombre: "Pendiente",
    foto: "/images/representantes/gestion-empresarial-mixta.jpg",
    instagram: "",
    semestre: "",
    colorAccent: "bg-pink-500"
  },
  {
    id: "industrial-mixta",
    carrera: "Ingeniería Industrial Mixta",
    nombre: "Pendiente",
    foto: "/images/representantes/industrial-mixta.jpg",
    instagram: "",
    semestre: "",
    colorAccent: "bg-teal-500"
  }
];

// RAMAS / MÓDULOS ESTUDIANTILES
// ===============================
type Rama = {
  id: string;
  nombre: string;
  descripcion: string;
  foto: string;
  instagram: string;
  colorAccent: string; // clase de Tailwind para el puntito de color
};

const ramas: Rama[] = [
  {
    id: "Unidas",
    nombre: "Rama Feminista Unidas",
    descripcion: "Colectiva estudiantil por la igualdad, la seguridad y la perspectiva de género.",
    foto: "public/images/RamaUnidas.png",
    instagram: "",
    colorAccent: "bg-pink-500"
  },
  //Ejemplos para futuro:
   {
    id: "deporte",
    nombre: "Deportes (Próximamente)",
    descripcion: "Actividades deportivas, torneos y fomento a la salud física.",
    foto: "/images/ramas/deporte.jpg",
    instagram: "",
    colorAccent: "bg-green-500"
   },
     {
     id: "artes",
     nombre: "Artes (Próximamente)",
     descripcion: "Teatro, música, danza y exposiciones artísticas estudiantiles.",
     foto: "/images/ramas/artes.jpg",
     instagram: "",
     colorAccent: "bg-indigo-500"
   },
];


export function RepresentantesCarreras() {
  return (
    <section id="representantes" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Representantes de Carrera
          </h2>
          <p className="text-lg text-slate-600">
            Cada carrera cuenta con un representante dedicado a defender los intereses 
            de los estudiantes y servir como enlace con el comité
          </p>
        </div>

        {/* Grid de Representantes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {representantes.map((rep) => (
            <Card 
              key={rep.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group border hover:border-slate-300"
            >
              {/* Foto del representante */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={rep.foto}
                  alt={rep.nombre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay con color de la carrera */}
                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${rep.colorAccent} shadow-lg`}></div>
              </div>

              {/* Información del representante */}
              <div className="p-5">
                <Badge className="mb-2" variant="outline">
                  {rep.semestre}
                </Badge>
                
                <h3 className="text-slate-900 mb-1">
                  {rep.nombre}
                </h3>
                
                <div className="flex items-start gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-600">
                    {rep.carrera}
                  </p>
                </div>

                {/* Helpers Representantes*/}
             <a
  href={igUrl(rep.instagram)}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 hover:underline"
>
  <Instagram className="w-4 h-4" />
  <span>{igHandle(rep.instagram)}</span>
</a>

              </div>
            </Card>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-slate-700">
            ¿Necesitas contactar a un representante? Haz clic en "Contactar" para enviar un email directamente.
          </p>
        </div>
        {/* ==============================
     RAMAS / MÓDULOS ESTUDIANTILES
   ============================== */}
<div id="ramas" className="py-16">
  <div className="text-center mb-12">
    <h2 className="text-slate-900 mb-4">Ramas y Módulos Estudiantiles</h2>
    <p className="text-lg text-slate-600">
      Iniciativas organizadas por estudiantes para impulsar causas y proyectos específicos.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {ramas.map((rama) => (
      <Card
        key={rama.id}
        className="overflow-hidden hover:shadow-xl transition-all duration-300 group border hover:border-slate-300"
      >
        {/* Foto */}
        <div className="relative h-56 overflow-hidden bg-slate-100">
          <ImageWithFallback
            src={rama.foto}
            alt={rama.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${rama.colorAccent} shadow-lg`} />
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-slate-900 mb-1">{rama.nombre}</h3>
          <p className="text-sm text-slate-600 mb-4">{rama.descripcion}</p>

{/* Instagram de la rama */}
<a
  href={igUrl(rama.instagram)}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm text-pink-600 hover:text-pink-700 hover:underline"
>
  <Instagram className="w-4 h-4" />
  <span>{igHandle(rama.instagram)}</span>
</a>


        </div>
      </Card>
    ))}
  </div>
</div>

      </div>
      
    </section>
  );
}
