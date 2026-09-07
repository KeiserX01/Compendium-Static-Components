import { classNames } from "@quartz-community/utils"
import type { QuartzComponent, QuartzComponentConstructor } from "@quartz-community/types"

/**
 * Placeholder
 * -----------
 * Componente invisible para reservar slots en el layout.
 *
 * Mismo patrón factory que CobaltSoulLogo: la función se llama con
 * opciones y devuelve un componente Preact.
 */
export const Placeholder: QuartzComponentConstructor<undefined> = () => {
  const Component: QuartzComponent = () => {
    return <div class={classNames("csc-placeholder")} aria-hidden="true" />
  }

  Component.css = `
.csc-placeholder {
  display: none;
}
`

  return Component
}

export default Placeholder
