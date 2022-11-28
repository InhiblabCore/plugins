import { openBlock as r, createElementBlock as _, createElementVNode as t, defineComponent as g, computed as u, unref as l, reactive as C, toRefs as $, ref as M, resolveComponent as k, createBlock as z, withCtx as L, mergeProps as V, renderSlot as B, withDirectives as d, toDisplayString as f, vShow as a, createVNode as h, normalizeClass as S } from "vue";
const w = (e, o) => {
  const s = e.__vccOpts || e;
  for (const [c, n] of o)
    s[c] = n;
  return s;
}, T = {}, j = {
  t: "1596458734865",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4898",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "14",
  height: "14"
}, D = /* @__PURE__ */ t("path", {
  d: "M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144",
  "p-id": "4899",
  fill: "#666"
}, null, -1), E = /* @__PURE__ */ t("path", {
  d: "M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z",
  "p-id": "4900",
  fill: "#666"
}, null, -1), H = [
  D,
  E
];
function O(e, o) {
  return r(), _("svg", j, H);
}
const U = /* @__PURE__ */ w(T, [["render", O]]), b = {}, N = {
  t: "1596458647160",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2840",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "18",
  height: "18"
}, R = /* @__PURE__ */ t("path", {
  d: "M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",
  fill: "#666",
  "p-id": "2841"
}, null, -1), I = [
  R
];
function J(e, o) {
  return r(), _("svg", N, I);
}
const P = /* @__PURE__ */ w(b, [["render", J]]), F = ["href"], A = /* @__PURE__ */ t("div", { style: { width: "16px", "margin-left": "6px" } }, [
  /* @__PURE__ */ t("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1024 1024",
    "xml:space": "preserve"
  }, [
    /* @__PURE__ */ t("g", null, [
      /* @__PURE__ */ t("path", {
        d: "M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z",
        "p-id": "2793",
        fill: "#555"
      })
    ])
  ])
], -1), q = [
  A
], G = /* @__PURE__ */ g({
  __name: "SfcPlayground",
  props: {
    content: null,
    importMap: null
  },
  setup(e) {
    const o = e, s = "https://sfc.vuejs.org/", c = u(() => {
      var i;
      const n = {
        "App.vue": (i = o.content) == null ? void 0 : i.replace(/vhp-/g, "")
      };
      if (o.importMap)
        try {
          n["import-map.json"] = JSON.stringify({
            imports: o.importMap
          });
        } catch {
        }
      return `${s}#${btoa(
        unescape(encodeURIComponent(JSON.stringify(n)))
      )}`;
    });
    return (n, i) => (r(), _("a", {
      href: l(c),
      style: { display: "flex", "align-items": "center" },
      target: "_blank"
    }, q, 8, F));
  }
});
function K(e) {
  const o = C({
    showTip: !1
  });
  function s() {
    navigator.clipboard.writeText(e), o.showTip = !0, setTimeout(() => {
      o.showTip = !1;
    }, 5 * 1e3);
  }
  return {
    ...$(o),
    copyCode: s
  };
}
const Q = { class: "demo-slot vp-raw" }, W = { class: "demo-title-desc" }, X = { class: "demo-title" }, Y = { class: "demo-desc" }, Z = { class: "demo-actions" }, tt = { class: "demo-platforms" }, et = { class: "demo-buttons" }, ot = { class: "demo-actions-copy" }, st = { class: "demo-actions-tip" }, nt = ["innerHTML"], it = /* @__PURE__ */ g({
  __name: "Demo",
  props: {
    code: null,
    highlightedCode: null,
    title: null,
    desc: null,
    lang: { default: "vue" },
    defaultExpand: { type: Boolean, default: !1 },
    importMap: { default: () => ({
      "vue-hooks-plus": "https://cdn.jsdelivr.net/npm/vue-hooks-plus/dist/js/index.es.js"
    }) }
  },
  setup(e) {
    const o = e, { showTip: s, copyCode: c } = K(o.code), n = u(() => decodeURIComponent(o.code)), i = u(
      () => decodeURIComponent(o.highlightedCode)
    ), p = M(o.defaultExpand), x = () => p.value = !p.value;
    return (m, v) => {
      const y = k("ClientOnly");
      return r(), z(y, null, {
        default: L(() => [
          t("article", V(m.$attrs, { class: "vitepress-demo" }), [
            t("div", Q, [
              B(m.$slots, "default")
            ]),
            d(t("div", W, [
              t("span", X, f(e.title), 1),
              t("span", Y, f(e.desc), 1)
            ], 512), [
              [a, e.title || e.desc]
            ]),
            t("div", Z, [
              t("div", tt, [
                h(G, {
                  content: l(n),
                  importMap: e.importMap
                }, null, 8, ["content", "importMap"])
              ]),
              t("div", et, [
                t("div", ot, [
                  d(t("span", st, "\u590D\u5236\u6210\u529F!", 512), [
                    [a, l(s)]
                  ]),
                  d(h(U, {
                    onClick: l(c),
                    title: "\u590D\u5236"
                  }, null, 8, ["onClick"]), [
                    [a, !l(s)]
                  ])
                ]),
                h(P, {
                  class: "demo-actions-expand",
                  onClick: v[0] || (v[0] = (lt) => x()),
                  title: "\u5C55\u5F00"
                })
              ])
            ]),
            d(t("div", {
              innerHTML: l(i),
              class: S(`language-${e.lang} extra-class`)
            }, null, 10, nt), [
              [a, p.value]
            ])
          ], 16)
        ]),
        _: 3
      });
    };
  }
});
export {
  it as default
};
