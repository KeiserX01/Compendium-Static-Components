import { QuartzComponentConstructor } from '@quartz-community/types';

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
declare const CobaltSoulLogo: QuartzComponentConstructor<undefined>;

export { CobaltSoulLogo as C };
