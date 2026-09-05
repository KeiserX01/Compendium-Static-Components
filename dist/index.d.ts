import * as preact from 'preact';
import { QuartzComponentProps } from '@quartz-community/types';

/**
 * CobaltSoulLogo
 * --------------
 * Renders the Cobalt Soul seal SVG inline in the sidebar, above the page title.
 * The SVG uses `fill="currentColor"` so it inherits the color set by the
 * `.csc-logo` class (controlled by `styles.scss`).
 */
declare const CobaltSoulLogo: {
    (_props: QuartzComponentProps): preact.JSX.Element;
    css: string;
};

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
declare const Placeholder: {
    (_props: QuartzComponentProps): preact.JSX.Element;
    css: string;
};

export { CobaltSoulLogo, Placeholder };
