import { useParams, Link } from "react-router-dom";
import { datosMesaDirectiva } from "../data/datosMesaDirectiva"; // Asegúrate que esta ruta sea correcta
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowLeft, Mail, Instagram, User, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function PerfilMiembro() {
  const { id } = useParams();
  
  // Buscamos al miembro en tu archivo de datos
  const miembro = datosMesaDirectiva.find((m) => m.id === id);

  // Si alguien pone una URL inventada, mostramos error
  if (!miembro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h2 className="text-2xl font-bold mb-4">Miembro no encontrado 😕</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  // Mapeo de tus colores a gradientes de Tailwind
  const gradientMap: Record<string, string> = {
    blue: "from-blue-600 to-blue-900",
    purple: "from-purple-600 to-purple-900",
    emerald: "from-emerald-600 to-emerald-900",
    default: "from-slate-700 to-slate-900"
  };

  const bgGradient = gradientMap[miembro.color] || gradientMap.default;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-1 container max-w-5xl mx-auto px-4 py-10 animate-in fade-in duration-500">
        
        {/* Botón Volver */}
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors font-medium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al organigrama
        </Link>

        {/* TARJETA PRINCIPAL DEL PERFIL */}
        <div className="bg-card text-card-foreground rounded-xl border border-border shadow-sm overflow-hidden">
          
          {/* 1. Portada de color (Banner) */}
          <div className={`h-48 bg-gradient-to-r ${bgGradient} relative`}>
             <div className="absolute inset-0 bg-black/10" />
          </div>
          
          <div className="px-8 pb-10">
            {/* 2. Cabecera: Foto y Nombre */}
            <div className="relative flex flex-col md:flex-row items-end -mt-20 mb-8 gap-6">
              
              {/* Foto de perfil */}
              <div className="w-40 h-40 rounded-full border-[6px] border-card shadow-xl overflow-hidden bg-muted z-10">
                 <ImageWithFallback 
                   src={miembro.foto} 
                   alt={miembro.nombre} 
                   className="w-full h-full object-cover" 
                 />
              </div>
              
              {/* Información Titular */}
              <div className="flex-1 pb-2 text-center md:text-left space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  {miembro.nombre}
                </h1>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start items-center">
                  <span className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-sm font-semibold text-secondary-foreground shadow hover:bg-secondary/80">
                    {miembro.cargo}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-border mb-8" />

            {/* 3. Grid de Información Detallada */}
            <div className="grid md:grid-cols-3 gap-10">
              
              {/* Columna Izquierda: Biografía y Funciones */}
              <div className="md:col-span-2 space-y-8">
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-xl font-semibold text-foreground">Sobre mí</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {miembro.biografia || "El miembro aún no ha agregado su biografía personal."}
                  </p>
                </section>

                <section>
                   <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-xl font-semibold text-foreground">Mis funciones</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {miembro.descripcion}
                  </p>
                </section>
              </div>

              {/* Columna Derecha: Contacto */}
              <div className="space-y-6">
                <div className="bg-muted/40 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Contacto Directo</h3>
                  
                  <div className="space-y-4">
                    {miembro.correo && (
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 bg-background rounded-md border border-border shrink-0">
                          <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-medium text-muted-foreground uppercase">Correo</span>
                          <a href={`mailto:${miembro.correo}`} className="text-sm font-medium hover:text-blue-600 truncate">
                            {miembro.correo}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {miembro.instagram && (
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-background rounded-md border border-border shrink-0">
                          <Instagram className="w-4 h-4 text-pink-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-muted-foreground uppercase">Instagram</span>
                          <a 
                            href={`https://instagram.com/${miembro.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium hover:text-pink-600"
                          >
                            {miembro.instagram}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}