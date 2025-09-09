
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
    'index.csr.html': {size: 45694, hash: 'de612c4ced42fe49234ece152f98eebfe4634946857d4ab70d632659d5336850', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4631, hash: '5151a9ce393e4d894f6e720b4e45f0feda64a6522e932bf3fefcda59a7e10a3d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6RLJDKPV.css': {size: 155229, hash: 'hlJ9GoX5Zxk', text: () => import('./assets-chunks/styles-6RLJDKPV_css.mjs').then(m => m.default)}
  },
};
