
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
      "chunk-KRY24VR2.js",
      "chunk-KTGIWT62.js",
      "chunk-IWONAWTB.js",
      "chunk-R7GV66WE.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PUFCA2LN.js"
    ],
    "route": "/*/careers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PUFCA2LN.js"
    ],
    "route": "/*/careers/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TF342H7W.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TF342H7W.js"
    ],
    "route": "/*/projects/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TGTHQQES.js"
    ],
    "route": "/*/media-center"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TGTHQQES.js"
    ],
    "route": "/*/media-center/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-R3O3VXPK.js",
      "chunk-KTGIWT62.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NUMIVRCI.js",
      "chunk-KTGIWT62.js",
      "chunk-XI43OPOW.js"
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
    'index.csr.html': {size: 45016, hash: '8ecc70d117d118e891124ff5a433591cb295b5323b19f824cf101e113834b5e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3928, hash: 'f8ca33cc4599d3b557b32e41136841687a613b5df7d603cc4e315acc156170a9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-KT34IDSA.css': {size: 155299, hash: 'Xp3jEZJitGY', text: () => import('./assets-chunks/styles-KT34IDSA_css.mjs').then(m => m.default)}
  },
};
