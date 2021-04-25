const proxy = require("http2-proxy");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    static: { url: "/", static: true, resolve: false },
    src: { url: "/dist" },
  },
  plugins: ["@snowpack/plugin-typescript", "@snowpack/plugin-react-refresh"],
  routes: [
    // API requests
    {
      src: "/api/.*",
      dest: (req, res) => {
        return proxy
          .web(req, res, {
            hostname: "localhost",
            port: 3000,
          })
          .catch(() => console.log("API server not started"));
      },
    },
    // SPA requests
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    /* ... */
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {},
};
