import { classNames } from "@quartz-community/utils"
import type { QuartzComponentProps } from "@quartz-community/types"

/**
 * Placeholder
 * -----------
 * Componente invisible que sirve como slot reservado en el layout.
 *
 * Uso: en `quartz.config.yaml` configurás `Placeholder` con `position: left`
 * y `display: none` o `display: all`, y el plugin queda "anclado" al layout
 * aunque todavía no tenga un componente visible. Sirve para:
 *   1. Validar que el plugin se carga correctamente.
 *   2. Reservar posición en el orden de prioridad para futuros componentes
 *      que vamos a sumar al plugin.
 *
 * Cuando agreguemos un componente visible (ej. un divisor decorativo, un
 * "back to top" button, etc.), reemplazás este placeholder por el nuevo
 * componente sin tocar el YAML.
 */
export const Placeholder = (_props: QuartzComponentProps) => {
  return <div class={classNames("csc-placeholder")} aria-hidden="true" />
}

Placeholder.css = `
.csc-placeholder {
  display: none;
}
`

export default Placeholder
