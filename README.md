# Compendium-StaticComponents

Plugin de Quartz 5 para la wiki **Compendium**. Renderiza el logo del Alma de Cobalto (D&D) en la sidebar, arriba del título de página.

## Componente incluido

| Componente | Descripción | Default position |
|---|---|---|
| `CobaltSoulLogo` | Logo del Alma de Cobalto, dorado sobre la sidebar | `left` priority 1 |

## Convención de naming

- **Plugin**: `Compendium-<Función sin abreviar>` → `compendium-staticcomponents` (kebab-case, sin scope npm).
- **Prefijo CSS**: `csc-` (Compendium Static Components) — corto para evitar selectores largos.
- **Asset path**: `quartz/static/cobalt-soul-seal.svg` en el wiki (no en el plugin).

## Requisito: el SVG en el wiki

El componente renderiza un `<img src="/static/cobalt-soul-seal.svg">`. Quartz sirve automáticamente el contenido de `quartz/static/` en `/static/`, así que tenés que poner el SVG en esa ruta:

```bash
cp /path/a/cobalt-soul-seal.svg quartz/static/cobalt-soul-seal.svg
```

El nombre del archivo debe ser **exactamente** `cobalt-soul-seal.svg` (con guión medio, no underscore).

## Instalación

```bash
npx quartz plugin add https://github.com/KeiserX01/Compendium-StaticComponents
```

Luego en `quartz.config.yaml`:

```yaml
plugins:
  - source: https://github.com/KeiserX01/Compendium-StaticComponents
    enabled: true
    options: {}
    order: 5
    layout:
      position: left
      priority: 1
```

El plugin se inyecta automáticamente en la sidebar izquierda, arriba de cualquier otro componente.

## Desarrollo local

```bash
# Instalar dependencias (la primera vez)
npm install --ignore-scripts

# Build (necesario antes de que Quartz cargue el plugin)
npm run build

# Watch mode (rebuilds on save)
npm run dev

# Type check
npm run typecheck
```

## Estructura

```
src/
├── index.ts                         # Entry point (re-exporta como default)
└── components/
    ├── index.ts                     # Subpath para componentLoader de Quartz
    ├── CobaltSoulLogo.tsx           # Logo (exporta factory named)
    └── svg.d.ts                     # Tipos ambient para imports de SVG
dist/
├── index.js                         # Main bundle
├── components.js                    # Subpath bundle (carga de componentes)
└── CobaltSoulLogo-XXXXX.js          # Chunks compartidos
```

## Cómo se colorea

El SVG se sirve con `fill` negro. El color dorado se aplica con CSS `filter` en el componente:

```css
.csc-logo__img {
  filter: brightness(0) saturate(100%)
          invert(78%) sepia(28%) saturate(437%) hue-rotate(355deg)
          brightness(95%) contrast(89%);
}
```

Esto transforma el negro en el dorado `#d4b58a` (mismo en light y dark mode).

Para cambiar el color, ajustá los valores de `filter` en `CobaltSoulLogo.tsx`. Un buen recurso para esto es https://codepen.io/sosuke/pen/Pjoqqp donde podés ver cómo distintos valores de filter afectan la imagen.

## Agregar un nuevo componente

1. Creá `src/components/NuevoComponente.tsx` exportando un factory con la firma:
   ```ts
   export const NuevoComponente: QuartzComponentConstructor<undefined> = () => {
     const Component: QuartzComponent = () => { /* JSX */ }
     Component.css = `/* CSS opcional */`
     return Component
   }
   ```
2. Agregá `export { NuevoComponente }` en `src/components/index.ts`.
3. Agregá la entry en `quartz.components` del `package.json`:
   ```json
   "NuevoComponente": {
     "displayName": "Nuevo Componente",
     "defaultPosition": "left",
     "defaultPriority": 1
   }
   ```
4. Rebuild con `npm run build`.

## Licencia

MIT
