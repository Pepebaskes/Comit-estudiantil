# 📸 GUÍA PARA AGREGAR FOTOS AL SITIO WEB DEL COMITÉ ESTUDIANTIL

## 🗂️ Estructura de Carpetas para las Fotos

Crea la siguiente estructura de carpetas en tu proyecto (dentro de la carpeta `public`):

```
public/
└── images/
    ├── logo-comite.png          (Logo del comité - 200x200px recomendado)
    ├── mesa-directiva/
    │   ├── vocal.jpg            (Foto del Vocal)
    │   ├── secretario.jpg       (Foto del Secretario)
    │   └── tesorero.jpg         (Foto del Tesorero)
    └── representantes/
        ├── informatica.jpg
        ├── innovacion-agricola.jpg
        ├── gestion-empresarial.jpg
        ├── arquitectura.jpg
        ├── electromecanica.jpg
        ├── industrial.jpg
        ├── gestion-empresarial-mixta.jpg
        └── industrial-mixta.jpg
```

## 📋 Lista de Fotos Necesarias

### 1. LOGO DEL COMITÉ
- **Ubicación**: `/public/images/logo-comite.png`
- **Tamaño recomendado**: 200x200 píxeles
- **Formato**: PNG con fondo transparente
- **Dónde se usa**: En el header (parte superior de la página)

---

### 2. MESA DIRECTIVA (3 fotos)

#### Vocal del Comité
- **Ubicación**: `/public/images/mesa-directiva/vocal.jpg`
- **Tamaño**: 400x400 píxeles (cuadrada)
- **Formato**: JPG o PNG

#### Secretario
- **Ubicación**: `/public/images/mesa-directiva/secretario.jpg`
- **Tamaño**: 400x400 píxeles (cuadrada)
- **Formato**: JPG o PNG

#### Tesorero
- **Ubicación**: `/public/images/mesa-directiva/tesorero.jpg`
- **Tamaño**: 400x400 píxeles (cuadrada)
- **Formato**: JPG o PNG

---

### 3. REPRESENTANTES DE CARRERA (8 fotos)

#### Ingeniería Informática
- **Ubicación**: `/public/images/representantes/informatica.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

#### Ingeniería Innovación Agrícola
- **Ubicación**: `/public/images/representantes/innovacion-agricola.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

#### Ingeniería Gestión Empresarial
- **Ubicación**: `/public/images/representantes/gestion-empresarial.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

#### Arquitectura
- **Ubicación**: `/public/images/representantes/arquitectura.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

#### Ingeniería Electromecánica
- **Ubicación**: `/public/images/representantes/electromecanica.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

#### Ingeniería Industrial
- **Ubicación**: `/public/images/representantes/industrial.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

#### Ingeniería Gestión Empresarial Mixta
- **Ubicación**: `/public/images/representantes/gestion-empresarial-mixta.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

#### Ingeniería Industrial Mixta
- **Ubicación**: `/public/images/representantes/industrial-mixta.jpg`
- **Tamaño**: 400x400 píxeles
- **Formato**: JPG o PNG

---

## ✏️ Cómo Editar la Información de Cada Persona

### Para la Mesa Directiva:
Edita el archivo: `/components/MesaDirectiva.tsx`

Busca la sección que dice `const mesaDirectiva = [` y modifica:
```typescript
{
  cargo: "Vocal del Comité",
  nombre: "CAMBIA ESTE NOMBRE",  // ← Pon el nombre real aquí
  foto: "/images/mesa-directiva/vocal.jpg",
  email: "CAMBIA@universidad.edu",  // ← Pon el email real aquí
  ...
}
```

### Para los Representantes de Carrera:
Edita el archivo: `/components/RepresentantesCarreras.tsx`

Busca la sección que dice `const representantes = [` y modifica:
```typescript
{
  carrera: "Ingeniería Informática",
  nombre: "CAMBIA ESTE NOMBRE",  // ← Pon el nombre real aquí
  foto: "/images/representantes/informatica.jpg",
  email: "CAMBIA@universidad.edu",  // ← Pon el email real aquí
  semestre: "7mo Semestre",  // ← Ajusta el semestre
  ...
}
```

---

## 📐 Especificaciones Técnicas de las Fotos

### Recomendaciones:
- **Formato preferido**: JPG para fotos, PNG para el logo
- **Resolución**: 72-150 DPI
- **Peso máximo**: 500 KB por foto
- **Fondo**: Preferiblemente neutro (blanco, gris claro)
- **Iluminación**: Buena iluminación frontal
- **Encuadre**: Foto de busto (hombros hacia arriba)

### Dimensiones:
- Logo: 200x200px (cuadrado)
- Fotos personas: 400x400px (cuadrado)

---

## 🔄 Proceso de Actualización

1. **Prepara las fotos** con las especificaciones mencionadas
2. **Crea las carpetas** necesarias en `public/images/`
3. **Coloca las fotos** en sus ubicaciones correspondientes
4. **Edita los archivos** de componentes para cambiar nombres y emails
5. **Verifica** que todo se vea correctamente en la página

---

## 💡 Consejos Adicionales

- Usa nombres de archivo descriptivos y sin espacios
- Mantén todas las fotos en el mismo estilo (misma iluminación, fondo similar)
- Asegúrate de tener permiso de las personas para usar sus fotos
- Guarda copias de respaldo de todas las fotos originales
- Optimiza las fotos antes de subirlas para mejorar la velocidad de carga

---

## ❓ ¿Necesitas Ayuda?

Si tienes dudas sobre cómo agregar las fotos o editar la información:
1. Revisa los comentarios dentro de cada archivo de componente
2. Asegúrate de que los nombres de archivos coincidan exactamente
3. Verifica que las rutas sean correctas (empiezan con `/images/`)

---

**Última actualización**: Octubre 2025
