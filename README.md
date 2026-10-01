# Luis Reynoso · Portfolio

Portafolio estático en HTML, CSS y JavaScript, con versiones completas en español (`index.html`) e inglés (`en.html`).

Abre `index.html` en el navegador. No requiere instalación ni compilación. Para GitHub Pages, en **Settings → Pages → Deploy from a branch**, selecciona la rama con estos archivos y la carpeta **/ (root)**. Se incluye `.nojekyll` para servir los archivos estáticos directamente.

## Contenido

- Proyectos: Sentinel, MAERP Mobile, 5e Character & Tools y la evolución Protego / Sentinel.
- Experiencia, formación, tecnologías, contacto y CV descargables.
- Diseño adaptable, navegación por teclado y soporte para movimiento reducido.
- Menú móvil accesible, sección activa en la navegación y cambio de idioma que conserva el fragmento de la URL. El contenido y el selector de idioma funcionan también sin JavaScript.

El contenido toma como referencia principal el CV de septiembre de 2026 y los proyectos compartidos. Las ilustraciones son vistas conceptuales construidas con CSS, no capturas de las aplicaciones. El CV de 2025 se ofrece como documento adicional y se identifica con su fecha.

Las fuentes se cargan desde Google Fonts; sin conexión se usan las fuentes locales de respaldo. Todos los demás elementos visuales se dibujan con CSS.

## Dónde editar

El HTML es la fuente del contenido: no hay generadores ni archivos Python.

| Archivo | Qué puedes cambiar |
| --- | --- |
| `index.html` | Todos los textos, proyectos y enlaces de la versión en español. |
| `en.html` | Los mismos contenidos en inglés. |
| `styles.css` | Colores, tipografías, tamaños, distribución y diseño móvil. |
| `main.js` | Menú móvil, indicador de sección y comportamiento del selector de idioma. |
| `assets/` | Los PDF descargables de tu CV. |

Las páginas tienen comentarios que identifican cada sección. Usa **Ctrl + F** para buscar `PRESENTACIÓN`, `PROYECTOS:`, `SOBRE MÍ`, `TECNOLOGÍAS Y` o `CONTACTO:` en `index.html`, o busca directamente el texto que ves en la página. Modifica el texto entre las etiquetas y guarda el archivo. Actualiza también `en.html` si quieres mantener ambas versiones sincronizadas.

Después de guardar, recarga el navegador para ver tus cambios. Para actualizarlos en GitHub Pages, haz commit y push a la rama configurada en Pages.
