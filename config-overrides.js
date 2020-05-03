const { override, fixBabelImports, babelInclude } = require("customize-cra");
const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),

  babelInclude([
    path.resolve("src"),
    path.resolve("node_modules/@jirihamberg/shop-product-service"),
  ])
);
