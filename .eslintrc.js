"use strict";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ["react"],
  rules: {
    "max-len": "off",
    strict: "error",
  },
  env: {
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  settings: {
    react: {
      "version": "detect",
    },
  },
  overrides: [
    {
      files: ["test/**/*"],
      env: {
        mocha: true,
      },
    },
  ],
};