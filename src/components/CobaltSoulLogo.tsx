import { classNames } from "@quartz-community/utils"
import type { QuartzComponentProps } from "@quartz-community/types"

import cobaltSoulSeal from "../../sc-resources/cobalt-soul-seal.svg?raw"

/**
 * CobaltSoulLogo
 * --------------
 * Renders the Cobalt Soul seal SVG inline in the sidebar, above the page title.
 * The SVG uses `fill="currentColor"` so it inherits the color set by the
 * `.csc-logo` class (controlled by `styles.scss`).
 */
export const CobaltSoulLogo = (_props: QuartzComponentProps) => {
  return (
    <div
      class={classNames("csc-logo", "cobalt-soul-logo")}
      role="img"
      aria-label="Cobalt Soul seal"
    >
      <div class="csc-logo__svg" dangerouslySetInnerHTML={{ __html: cobaltSoulSeal }} />
    </div>
  )
}

CobaltSoulLogo.css = `
/* Estilos en styles.scss del plugin (embebido abajo para que Quartz lo cargue). */
.csc-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem 0.25rem;
  color: #d4b58a; /* dorado claro, mismo en light y dark */
  pointer-events: none;
}

.csc-logo__svg {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
}

.csc-logo__svg svg {
  width: 100%;
  height: auto;
  display: block;
  fill: currentColor;
}

@media (max-width: 800px) {
  .csc-logo {
    padding: 0.5rem 0.25rem 0.125rem;
  }
  .csc-logo__svg {
    max-width: 140px;
  }
}
`

export default CobaltSoulLogo
