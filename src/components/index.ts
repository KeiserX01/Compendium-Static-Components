/**
 * Compendium-StaticComponents - subpath de componentes.
 * Este archivo se compila a `dist/components.js` y es desde donde
 * Quartz importa los componentes individuales del manifest.
 *
 * PATRÓN: cada componente se exporta como NAMED para que el componentLoader
 * de Quartz pueda importarlo via `componentsModule[exportName]`.
 */
import { CobaltSoulLogo } from "./CobaltSoulLogo"
import type { QuartzComponentConstructor } from "@quartz-community/types"

export { CobaltSoulLogo }

// También exportamos un default para compatibilidad con
// el patrón del template oficial (un solo default por bundle).
const CobaltSoulLogo_default: QuartzComponentConstructor<undefined> = (() => CobaltSoulLogo) as any
export default CobaltSoulLogo_default
