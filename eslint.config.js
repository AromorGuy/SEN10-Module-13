const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    files: ["script.js"],
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser, module: "writable" },
    },
  },
  {
    files: ["__tests__/**/*.js", "eslint.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node, ...globals.jest },
    },
  },
];
