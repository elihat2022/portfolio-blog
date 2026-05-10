# Blog y portfolio personal

Sitio construido con Astro para mostrar un portfolio profesional y un blog de tecnología, inteligencia artificial, backend y diseño.

## Contenido

- Página principal con perfil, experiencia, proyectos y educación.
- Blog con posts ordenados por fecha.
- Tags en cada post para filtrado y clasificación temática.
- Rutas separadas para portfolio y blog.

## Estructura principal

```text
src/
├── assets/           # Imágenes, PDF y recursos estáticos internos
├── components/       # Componentes reutilizables como NavBar, BlogCard y Welcome
├── content/
│   └── posts/        # Entradas del blog en Markdown
├── layouts/          # Layout global del sitio
└── pages/            # Rutas de la aplicación
	├── index.astro   # Home / portfolio
	└── blog/
		├── index.astro
		└── [id].astro
```

## Requisitos

- Node.js 22.12 o superior

## Comandos

| Comando           | Acción                           |
| :---------------- | :------------------------------- |
| `npm install`     | Instala dependencias             |
| `npm run dev`     | Inicia el servidor local         |
| `npm run build`   | Genera la versión de producción  |
| `npm run preview` | Previsualiza la build localmente |
| `npm run astro`   | Ejecuta comandos de Astro        |

## Notas

- Los posts del blog se cargan desde `src/content/posts`.
- Los campos del frontmatter se validan en `src/content.config.ts`.
- El layout global aplica la navegación y el fondo a todo el sitio.
