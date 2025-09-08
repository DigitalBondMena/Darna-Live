
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
      "chunk-24DMFMDD.js",
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
      "chunk-EPKWUP6V.js",
      "chunk-G6F6G77E.js"
    ],
    "route": "/*/privacy-policy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2WOBVPHY.js",
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
    'index.csr.html': {size: 45681, hash: '478bfff7e0702432419ed410709d384d34bab1b43b73e30bebbba00daf2c1782', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4618, hash: 'db5e795c20c287f6f4c4b8ba7b71f864e9618ae420e2483084b683ea5948c9bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3UJFUAC7.css': {size: 155106, hash: '0VtSwK+AwwU', text: () => import('./assets-chunks/styles-3UJFUAC7_css.mjs').then(m => m.default)}
  },
};
