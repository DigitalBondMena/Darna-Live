
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
      "chunk-R46GZM5R.js",
      "chunk-G6F6G77E.js",
      "chunk-PSH4U5R2.js",
      "chunk-G32DFUHO.js"
    ],
    "route": "/*/about-us"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7XQHDZR6.js"
    ],
    "route": "/*/careers"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7XQHDZR6.js"
    ],
    "route": "/*/careers/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-INM7HFGJ.js"
    ],
    "route": "/*/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-INM7HFGJ.js"
    ],
    "route": "/*/projects/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKSY24I3.js"
    ],
    "route": "/*/media-center"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CKSY24I3.js"
    ],
    "route": "/*/media-center/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EW7HS6NC.js",
      "chunk-G6F6G77E.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QWBCITUU.js",
      "chunk-G6F6G77E.js",
      "chunk-Z42L5HGI.js"
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
    'index.csr.html': {size: 44993, hash: '20f552010d16cd24093888bcf45d7e4b38d02cc85e4f2fd2e03af6ef6f8aae7d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3928, hash: '27c4600fb8209b2a057188b736737ff050c6080a967e8e4228d88d14e742feeb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3UJFUAC7.css': {size: 155106, hash: '0VtSwK+AwwU', text: () => import('./assets-chunks/styles-3UJFUAC7_css.mjs').then(m => m.default)}
  },
};
