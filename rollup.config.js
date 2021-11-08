/* ***************************************************************************
 *
 * Copyright (c) 2021, the tributary.js authors.
 *
 * This file is part of the tributary.js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import babel from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import json from "@rollup/plugin-json";
import sourcemaps from "rollup-plugin-sourcemaps";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import nodePolyfills from "rollup-plugin-node-polyfills";
import inject from "@rollup/plugin-inject";
import injectProcessEnv from "rollup-plugin-inject-process-env";

import pkg from "./package.json";

export default () => [
  {
    input: "src/js/index.js",
    output: {
      sourcemap: true,
      file: pkg.module,
      name: "tributary",
      format: "esm",
    },
    plugins: [
      nodeResolve({ browser: true }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      nodePolyfills(),
      globals(),
      filesize(),
      json(),
      injectProcessEnv({
        IEX_TOKEN: "",
      }),
      terser(),
      sourcemaps(),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: "src/js/index.js",
    output: {
      sourcemap: true,
      format: "cjs",
      file: "dist/cjs/tributary.js",
    },
    plugins: [
      inject({
        EventSource: "eventsource", // inject for node
        fetch: "cross-fetch", // inject for node
        include: "**/*.js",
      }),
      nodeResolve({ browser: false, preferBuiltins: true }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      json(),
      globals(),
      sourcemaps(),
    ],
    watch: {
      clearScreen: false,
    },
  },
];
