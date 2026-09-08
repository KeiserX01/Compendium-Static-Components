import { classNames } from "@quartz-community/utils"
import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types"

/**
 * CobaltSoulLogo
 * --------------
 * Renderiza el logo del Alma de Cobalto en la sidebar.
 * Usa <img> con el SVG servido como asset estático de Quartz.
 * El color se aplica vía CSS filter (no se puede teñir <img> con
 * currentColor directamente).
 *
 * IMPORTANTE: exportamos el factory como NAMED export, no default.
 * El barrel (src/index.ts) lo envuelve como default para evitar
 * la duplicación _default / _default$1 en el bundle.
 */
const DEFAULT_LOGO_SRC = "static/cobalt-soul-seal.svg"

export const CobaltSoulLogo: QuartzComponentConstructor<undefined> = () => {
  const Component: QuartzComponent = () => {
    return (
      <div
        class={classNames("csc-logo", "cobalt-soul-logo")}
        role="img"
        aria-label="Cobalt Soul seal"
      >
        <img
          src={DEFAULT_LOGO_SRC}
          alt="Cobalt Soul seal"
          class="csc-logo__img"
          width="220"
          height="220"
          loading="eager"
        />
      </div>
    )
  }

  Component.css = `
/* === Cobalt Soul Logo === */
.csc-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  padding-block-end: 3.9rem;
  /* padding: 0.2rem 0.5rem 0.25rem; */
  flex-wrap: nowrap;
  /* gap: 0.5rem; */
  pointer-events: none;
}

.csc-logo__img {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
  /* Teñimos el SVG negro al dorado #d4b58a. */
  filter: brightness(0) saturate(100%)
          invert(78%) sepia(28%) saturate(437%) hue-rotate(355deg)
          brightness(95%) contrast(89%);
  -webkit-filter: brightness(0) saturate(100%)
          invert(78%) sepia(28%) saturate(437%) hue-rotate(355deg)
          brightness(95%) contrast(89%);
}

@media (max-width: 800px) {
  .csc-logo {
    /* padding: 0.2rem 0.25rem 0.125rem; */
  }
  .csc-logo__img {
    max-width: 140px;
  }
}
`

  return Component
}
