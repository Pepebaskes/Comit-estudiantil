/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_URL?: string;
  // Agrega aquí otras variables de entorno si las necesitas
  // readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
