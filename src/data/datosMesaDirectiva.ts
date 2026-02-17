// src/data/datosMesaDirectiva.ts

import { UserCircle, FileText, Coins, Flower } from "lucide-react";

export const datosMesaDirectiva = [
  {
    id: "presidente",
    cargo: "Presidente del Comité Estudiantil",
    nombre: "José Luis Rafael Vázquez Silva",
    foto: `${import.meta.env.BASE_URL}images/pepeB.jpg`,
    instagram: "@pepebaskes",
    descripcion: "Lidera y coordina las actividades del comité estudiantil",
    // DATOS NUEVOS PARA EL PERFIL:
    correo: "l20123456@grullo.tecnm.mx",
    biografia: "Soy estudiante de Ingeniería en Gestión Empresarial, apasionado por el liderazgo y el deporte. Mi objetivo como presidente es asegurar que cada voz estudiantil sea escuchada...",
    icono: UserCircle,
    color: "blue"
  },
  {
    id: "secretario",
    cargo: "Secretario",
    nombre: "Ricardo Flores Rosas",
    foto: `${import.meta.env.BASE_URL}images/ricardoF.jpg`,
    instagram: "@flores.11ricardo",
    descripcion: "Gestiona la documentación y comunicaciones oficiales",
    correo: "secretario@comite.mx",
    biografia: "Encargado de mantener el orden en las actas y la comunicación oficial del comité.",
    icono: FileText,
    color: "purple"
  },
  {
    id: "tesorero",
    cargo: "Tesorero",
    nombre: "Omar Iván Hernández Ibarra",
    foto: `${import.meta.env.BASE_URL}images/omarGay.jpg`,
    instagram: "@omar_._hernandez",
    descripcion: "Gestiona los recursos financieros del comité",
    correo: "tesoreria@comite.mx",
    biografia: "Mi responsabilidad es la transparencia y el uso eficiente de los recursos del comité.",
    icono: Coins,
    color: "emerald"
  },
   {
    id: "igualdadYBienestar",
    cargo: "Coordinadora de Bienestar e Igualdad",
    nombre: "Cinthia Arelí Flores Gallardo",
    foto: `${import.meta.env.BASE_URL}images/cinthia.jpg`,
    instagram: "@panacinthia05",
    descripcion: "Encargada de promover la equidad y el bienestar de los estudiantes",
    correo: "igualdad@comite.mx",
    biografia: "Mi responsabilidad es promover el bienestar y la equidad entre todos los estudiantes del comité.",
    icono: Flower,
    color: "emerald"
  },
   {
    id: "relacionesPublicas",
    cargo: "Relaciones Públicas",
    nombre: "Kenneth Gibran Guzmán Flores",
    foto: `${import.meta.env.BASE_URL}images/kenneth.jpg`,
    instagram: "@k.floressss",
    descripcion: "Promueve la comunicación entre el comité y la comunidad universitaria",
    correo: "relaciones@comite.mx",
    biografia: "Mi responsabilidad es fortalecer las relaciones entre el comité y la comunidad universitaria.",
    icono: FileText,
    color: "blue"
  },
  // ... Agrega aquí a los demás miembros (Cinthia, Kenneth, etc) con la misma estructura
];