
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
    'index.csr.html': {size: 45184, hash: '20a92118cc5377062359dad0711d59bf99dc247caabb3328fa87be8286820c32', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4121, hash: '042571d8b7c319d1eb2d1d470bcf6833dea48aa22d77770f3116503922f3d950', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6RLJDKPV.css': {size: 155229, hash: 'hlJ9GoX5Zxk', text: () => import('./assets-chunks/styles-6RLJDKPV_css.mjs').then(m => m.default)}
  },
};
