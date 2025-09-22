
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-BYKCLFCY.js",
      "chunk-B5ORR4EW.js",
      "chunk-UT2M7QUN.js",
      "chunk-JCJ4IGQD.js",
      "chunk-XTNDJNGS.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R65PLW4D.js"
    ],
    "route": "/*/careers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R65PLW4D.js"
    ],
    "route": "/*/careers/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ENDUHJEF.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ENDUHJEF.js"
    ],
    "route": "/*/projects/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GNANLEAU.js"
    ],
    "route": "/*/media-center"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GNANLEAU.js"
    ],
    "route": "/*/media-center/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V7DLAI3P.js",
      "chunk-B5ORR4EW.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VMHM4C5D.js",
      "chunk-B5ORR4EW.js",
      "chunk-JZ6LUAQX.js"
    ],
    "route": "/*/contact-us"
  },
  {
    "renderMode": 0,
    "redirectTo": "/ar",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 45704, hash: '44ade11c8792384e5c8d71d87d40e977c4058f432d07e3a88f425c229de1d282', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4618, hash: '69f37338fe70e37a269cfa92fc20f1da1c091440b304024262d45f90df086cd1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BPVS4FOQ.css': {size: 155323, hash: 'pVsLnRrW+iA', text: () => import('./assets-chunks/styles-BPVS4FOQ_css.mjs').then(m => m.default)}
  },
};
