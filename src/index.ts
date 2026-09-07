/**
 * Compendium-StaticComponents
 * Plugin entry point. Re-exports each component as default
 * so Quartz can pick them up via the `quartz.components` map
 * in package.json.
 */
export { default as CobaltSoulLogo } from "./components/CobaltSoulLogo"
export { default as Placeholder } from "./components/Placeholder"
