import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const root = process.cwd();
const require = createRequire(import.meta.url);
const source = fs.readFileSync(path.join(root, "app", "page.tsx"), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    jsx: ts.JsxEmit.ReactJSX,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
    esModuleInterop: true,
  },
}).outputText;

const module = { exports: {} };
const context = vm.createContext({ module, exports: module.exports, require });
new vm.Script(compiled, { filename: "page.cjs" }).runInContext(context);
const Page = module.exports.default;
const body = renderToStaticMarkup(React.createElement(Page));
const css = fs
  .readFileSync(path.join(root, "app", "globals.css"), "utf8")
  .replace(/^@import\s+"tailwindcss";\s*/m, "");

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Vimigo Proposal for Byon Suites</title>
  <meta name="description" content="A focused 30-day business transformation proposal to connect Byon Suites' direction, performance, visibility and fair recognition.">
  <meta property="og:title" content="Vimigo × Byon Suites — Business Transformation Proposal">
  <meta property="og:description" content="From daily operations to visible, accountable performance.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="og-proposal.png">
  <meta name="twitter:card" content="summary_large_image">
  <style>${css}</style>
</head>
<body>${body}</body>
</html>`;

const output = path.join(root, "docs");
fs.mkdirSync(output, { recursive: true });
fs.writeFileSync(path.join(output, "index.html"), html, "utf8");
fs.copyFileSync(path.join(root, "public", "og-proposal.png"), path.join(output, "og-proposal.png"));
fs.writeFileSync(path.join(output, ".nojekyll"), "", "utf8");

console.log(`Static proposal generated at ${path.join(output, "index.html")}`);
