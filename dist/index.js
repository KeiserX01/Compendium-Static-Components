// src/components/CobaltSoulLogo.tsx
import { classNames } from "@quartz-community/utils";

// sc-resources/cobalt-soul-seal.svg?raw
var cobalt_soul_seal_default = "./cobalt-soul-seal-7HKRRXB4.svg?raw";

// src/components/CobaltSoulLogo.tsx
import { jsx } from "preact/jsx-runtime";
var CobaltSoulLogo = (_props) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      class: classNames("csc-logo", "cobalt-soul-logo"),
      role: "img",
      "aria-label": "Cobalt Soul seal",
      children: /* @__PURE__ */ jsx("div", { class: "csc-logo__svg", dangerouslySetInnerHTML: { __html: cobalt_soul_seal_default } })
    }
  );
};
CobaltSoulLogo.css = `
/* Estilos en styles.scss del plugin (embebido abajo para que Quartz lo cargue). */
.csc-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem 0.25rem;
  color: #d4b58a; /* dorado claro, mismo en light y dark */
  pointer-events: none;
}

.csc-logo__svg {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
}

.csc-logo__svg svg {
  width: 100%;
  height: auto;
  display: block;
  fill: currentColor;
}

@media (max-width: 800px) {
  .csc-logo {
    padding: 0.5rem 0.25rem 0.125rem;
  }
  .csc-logo__svg {
    max-width: 140px;
  }
}
`;

// src/components/Placeholder.tsx
import { classNames as classNames2 } from "@quartz-community/utils";
import { jsx as jsx2 } from "preact/jsx-runtime";
var Placeholder = (_props) => {
  return /* @__PURE__ */ jsx2("div", { class: classNames2("csc-placeholder"), "aria-hidden": "true" });
};
Placeholder.css = `
.csc-placeholder {
  display: none;
}
`;
export {
  CobaltSoulLogo,
  Placeholder
};
//# sourceMappingURL=index.js.map