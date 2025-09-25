
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
    'index.csr.html': {size: 45704, hash: '7fccf2a26e0372f68bade166e50744e37a8c2a57ae31ad5081370a8c547896d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4618, hash: '5aa72689ea064c572dff337aef0ebc7e4acaf319ffeb67f02a52d68db15b2ba5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BPVS4FOQ.css': {size: 155323, hash: 'pVsLnRrW+iA', text: () => import('./assets-chunks/styles-BPVS4FOQ_css.mjs').then(m => m.default)}
  },
};
