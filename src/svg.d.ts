// Ambient type declarations para tsup
// ------------------------------------
// TypeScript nativo no entiende el sufijo `?raw` que usa esbuild/tsup
// para importar el contenido de un archivo como string. Estas declaraciones
// le enseñan al compilador cómo tipar esos imports.

declare module "*.svg?raw" {
  const content: string
  export default content
}

declare module "*.svg" {
  const url: string
  export default url
}

declare module "*.png?raw" {
  const content: string
  export default content
}

declare module "*.png" {
  const url: string
  export default url
}
