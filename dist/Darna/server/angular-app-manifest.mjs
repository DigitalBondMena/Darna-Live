
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
      "chunk-633IQZZK.js",
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
      "chunk-CPFGB2JD.js",
      "chunk-KTGIWT62.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3PHPCJUM.js",
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
    'index.csr.html': {size: 45704, hash: 'b15ed9947658c5a5fc6e95bfd20a7a462e3e37196b7acd458f2776ec14ceb3cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4618, hash: 'acdf5ffb5085d5d1503f7d8e3c275b09b78f3129949dd37737740c26c8e0c786', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BPVS4FOQ.css': {size: 155323, hash: 'pVsLnRrW+iA', text: () => import('./assets-chunks/styles-BPVS4FOQ_css.mjs').then(m => m.default)}
  },
};
