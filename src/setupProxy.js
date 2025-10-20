const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.dictionaryapi.dev",
      changeOrigin: true,
      secure: false,
      timeout: 30000,
      proxyTimeout: 30000,
    })
  );
};
