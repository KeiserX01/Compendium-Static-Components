/**
 * Compendium-StaticComponents
 * Plugin entry point. Single default export (el factory de CobaltSoulLogo).
 * Patrón idéntico al de @quartz-community/darkmode.
 */
import { CobaltSoulLogo } from "./components/CobaltSoulLogo"

const CobaltSoulLogo_default = (() => CobaltSoulLogo) as any

export default CobaltSoulLogo_default
export { CobaltSoulLogo }
