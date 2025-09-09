
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
    'index.csr.html': {size: 45596, hash: 'ffda389f5dc2f3048ae71992a11a65eac6e6c38d1616e8a11158a80d7d0aa4aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4532, hash: 'b19ecd6f4c4302d9f05830459318df363b5174c530e96766efd6252ea70df8ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6RLJDKPV.css': {size: 155229, hash: 'hlJ9GoX5Zxk', text: () => import('./assets-chunks/styles-6RLJDKPV_css.mjs').then(m => m.default)}
  },
};
