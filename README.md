# Compendium-StaticComponents

Plugin de Quartz 5 para la wiki **Compendium**. Agrupa componentes visuales estáticos (logos, divisores, placeholders, etc.) que se renderizan en el layout sin consumir datos dinámicos de las notas.

## Componentes incluidos (v0.1.0)

| Componente | Descripción | Default position |
|---|---|---|
| `CobaltSoulLogo` | Logo del Alma de Cobalto (D&D), dorado sobre la sidebar | `left` priority 1 |
| `Placeholder` | Slot invisible para reservar posición en el layout | `left` priority 2 |

## Convención de naming

- **Plugin**: `Compendium-<Función sin abreviar>` → `compendium-staticcomponents`
- **Prefijo CSS**: `csc-` (Compendium Static Components) — corto para evitar selectores largos

## Instalación

Quartz instala plugins desde git:

```bash
npx quartz plugin add https://github.com/<tu-usuario>/Compendium-StaticComponents
```

Luego en `quartz.config.yaml`:

```yaml
plugins:
  - source: "@compendium/staticcomponents"
    enabled: true
    layout:
      - position: left
        priority: 1   # Aparece arriba de todo en la sidebar
      - position: left
        priority: 2   # Placeholder
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Build (necesario antes de que Quartz lo cargue)
npm run build

# Watch mode (rebuilds on save)
npm run dev

# Type check
npm run typecheck
```

## Estructura

```
src/
├── index.ts                         # Entry point
└── components/
    ├── CobaltSoulLogo.tsx           # Logo principal
    └── Placeholder.tsx              # Slot invisible
sc-resources/
└── cobalt-soul-seal.svg             # SVG fuente (sin metadata C2PA)
```

## Cómo se colorea

El SVG usa `fill="currentColor"`. El color se hereda del CSS embebido en el componente:

```css
.csc-logo {
  color: #d4b58a; /* dorado claro, mismo en light y dark */
}
```

Si querés un color distinto, editás esta línea en `CobaltSoulLogo.tsx`.

## Próximos componentes planeados

- Divisor decorativo entre secciones de la sidebar
- "Back to top" button
- Indicador de progreso de lectura

Para sumar uno, creás `src/components/Nombre.tsx`, lo exportás en `src/index.ts`, lo registrás en `quartz` (package.json) y rebuildás.
