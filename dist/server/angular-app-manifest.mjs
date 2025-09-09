
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
      "chunk-X7EGCZ7I.js",
      "chunk-OBM7RTNR.js",
      "chunk-IWTS4ABB.js",
      "chunk-XGNKKZLG.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FYBUOHWG.js"
    ],
    "route": "/*/careers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FYBUOHWG.js"
    ],
    "route": "/*/careers/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S6SZTO2W.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S6SZTO2W.js"
    ],
    "route": "/*/projects/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYTNR6BM.js"
    ],
    "route": "/*/media-center"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYTNR6BM.js"
    ],
    "route": "/*/media-center/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-Y3R4WYWT.js",
      "chunk-OBM7RTNR.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HYEDS4LJ.js",
      "chunk-VQTOOQJ4.js",
      "chunk-OBM7RTNR.js"
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
    'index.csr.html': {size: 45694, hash: 'b4f4cc36b11e057e359ac7fa3919dbf0896f64a6acf69c39727452a268a283a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4631, hash: '1c4f3c8d9b8bc1a67e457f7ae17fdfdc15df75576e40b95db92954c0a93128d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6RLJDKPV.css': {size: 155229, hash: 'hlJ9GoX5Zxk', text: () => import('./assets-chunks/styles-6RLJDKPV_css.mjs').then(m => m.default)}
  },
};
