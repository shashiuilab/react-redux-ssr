"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renderFullPage;

function renderFullPage(html, preloadedState) {
  return "\n      <!doctype html>\n      <html>\n        <head>\n          <title>Redux Universal Example</title>\n          ".concat(process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" type="text/css" href="/dist/main.style.css" />' : '', "\n        </head>\n        <body>\n          <div id=\"root\">").concat(html, "</div>\n          <script>\n            // WARNING: See the following for security issues around embedding JSON in HTML:\n            // http://redux.js.org/recipes/ServerRendering.html#security-considerations\n            window.__PRELOADED_STATE__ = ").concat(JSON.stringify(preloadedState).replace(/</g, "\\u003c"), "\n          </script>\n          <script src=\"/dist/main.bundle.js\"></script>\n        </body>\n      </html>\n      ");
}