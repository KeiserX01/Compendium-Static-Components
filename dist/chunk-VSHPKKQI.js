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
  padding: 0.2rem 0.5rem 0.25rem;
  pointer-events: none;
}

.csc-logo__img {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
  /* Te\xF1imos el SVG negro al dorado #d4b58a. */
  filter: brightness(0) saturate(100%)
          invert(78%) sepia(28%) saturate(437%) hue-rotate(355deg)
          brightness(95%) contrast(89%);
  -webkit-filter: brightness(0) saturate(100%)
          invert(78%) sepia(28%) saturate(437%) hue-rotate(355deg)
          brightness(95%) contrast(89%);
}

@media (max-width: 800px) {
  .csc-logo {
    padding: 0.2rem 0.25rem 0.125rem;
  }
  .csc-logo__img {
    max-width: 140px;
  }
}
`;
  return Component;
};

export {
  CobaltSoulLogo
};
//# sourceMappingURL=chunk-VSHPKKQI.js.map