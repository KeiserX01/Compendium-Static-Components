// src/components/CobaltSoulLogo.tsx
import { classNames } from "@quartz-community/utils";
import { jsx } from "preact/jsx-runtime";
var CobaltSoulLogo = () => {
  const Component = () => {
    return /* @__PURE__ */ jsx(
      "div",
      {
        class: classNames("csc-logo", "cobalt-soul-logo"),
        role: "img",
        "aria-label": "Cobalt Soul seal",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/static/cobalt-soul-seal.svg",
            alt: "Cobalt Soul seal",
            class: "csc-logo__img",
            width: "220",
            height: "220",
            loading: "eager"
          }
        )
      }
    );
  };
  Component.css = `
/* === Cobalt Soul Logo === */
.csc-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem 0.25rem;
  pointer-events: none;
}

.csc-logo__img {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
  /* Te\xF1imos el SVG negro al dorado #d4b58a.
     El SVG se sirve con fill negro; usamos filter para recolorearlo. */
  filter: brightness(0) saturate(100%)
          invert(78%) sepia(28%) saturate(437%) hue-rotate(355deg)
          brightness(95%) contrast(89%);
  -webkit-filter: brightness(0) saturate(100%)
          invert(78%) sepia(28%) saturate(437%) hue-rotate(355deg)
          brightness(95%) contrast(89%);
}

@media (max-width: 800px) {
  .csc-logo {
    padding: 0.5rem 0.25rem 0.125rem;
  }
  .csc-logo__img {
    max-width: 140px;
  }
}
`;
  return Component;
};
var CobaltSoulLogo_default = (() => CobaltSoulLogo);

// src/components/Placeholder.tsx
import { classNames as classNames2 } from "@quartz-community/utils";
import { jsx as jsx2 } from "preact/jsx-runtime";
var Placeholder = () => {
  const Component = () => {
    return /* @__PURE__ */ jsx2("div", { class: classNames2("csc-placeholder"), "aria-hidden": "true" });
  };
  Component.css = `
.csc-placeholder {
  display: none;
}
`;
  return Component;
};
var Placeholder_default = (() => Placeholder);
export {
  CobaltSoulLogo_default as CobaltSoulLogo,
  Placeholder_default as Placeholder
};
//# sourceMappingURL=index.js.map