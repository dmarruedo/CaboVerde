# 🌊 Cabo Verde 2026

Plan de viaje interactivo y editable para mis vacaciones en Cabo Verde, del 12 al 24 de agosto de 2026.

> Aplicación web en un solo archivo HTML, sin dependencias ni backend. Todos los cambios se guardan en la memoria del navegador (`localStorage`).

## ✨ Características

- 📅 **Itinerario completo** día a día por las islas de Santiago, São Vicente y Santo Antão
- 🏝️ **Filtro por isla** para ver solo los días de cada zona
- ✏️ **Totalmente editable**: añade, edita y borra días, actividades, gestiones y alojamientos
- 📝 **Notas ocultas** por actividad (se muestran solo al pulsarlas)
- 🏨 **Alojamientos** con enlaces directos a las reservas
- 📋 **Lista de gestiones pendientes** con prioridad y checkboxes
- 🎨 **15 etiquetas de color** (vuelo, comida, senderismo, playa…) y 50+ iconos
- 💾 **Persistencia automática** en el navegador
- 📥 **Exportar** los datos a JSON como copia de seguridad
- 📱 **Optimizado para móvil**

## 🚀 Cómo publicarlo en GitHub Pages

Para acceder al plan desde cualquier móvil con un enlace web:

### 1. Crear el repositorio

1. Entra en [github.com](https://github.com) (crea una cuenta si aún no tienes).
2. Pulsa el botón verde **New** (arriba a la izquierda) o ve a [github.com/new](https://github.com/new).
3. Ponle un nombre, por ejemplo `cabo-verde-2026`.
4. Marca **Public** (necesario para GitHub Pages gratis).
5. Pulsa **Create repository**.

### 2. Subir los archivos

1. En el repositorio recién creado, pulsa **Add file → Upload files**.
2. Arrastra `index.html`, `README.md` y `LICENSE` (o el zip descomprimido).
3. Pulsa **Commit changes** abajo del todo.

### 3. Activar GitHub Pages

1. Ve a la pestaña **Settings** (arriba a la derecha del repo).
2. En el menú lateral pulsa **Pages**.
3. En **Source** elige `Deploy from a branch`.
4. En **Branch** elige `main` y `/ (root)`. Pulsa **Save**.
5. Espera 1-2 minutos.

### 4. Acceder a la web

La URL será:

```
https://TU-USUARIO.github.io/cabo-verde-2026/
```

Ábrela en el móvil y guárdala en la pantalla de inicio para usarla como una app.

> 💡 **Truco iOS:** abre la URL en Safari → pulsa el botón de compartir → "Añadir a pantalla de inicio".
>
> 💡 **Truco Android:** abre la URL en Chrome → menú de los tres puntos → "Añadir a pantalla de inicio".

## 🗂️ Estructura del proyecto

```
cabo-verde-2026/
├── index.html      # La aplicación completa (HTML + CSS + JS en un solo archivo)
├── README.md       # Este archivo
└── LICENSE         # MIT
```

## 🛠️ Tecnologías

- HTML, CSS y JavaScript puros
- `localStorage` para persistencia
- Sin frameworks, sin dependencias, sin build step
- Fuentes: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)

## 📝 Uso

- **Toca cualquier elemento** para editarlo.
- El **botón ＋** flotante abajo a la derecha abre el menú de acciones.
- Al editar una actividad puedes añadir una **nota oculta** que solo se muestra al pulsar el icono 📝.
- Para empezar de cero: menú ＋ → **Restablecer todo**.
- Para hacer copia de seguridad: menú ＋ → **Exportar datos (JSON)**.

## 📄 Licencia

[MIT](LICENSE) — úsalo como quieras.
