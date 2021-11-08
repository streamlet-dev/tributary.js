/* ***************************************************************************
 *
 * Copyright (c) 2021, the tributary.js authors.
 *
 * This file is part of the tributary.js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-param-reassign */

import { NodeSpec } from "../base";

const baseSpec = ({ name, description, foo }) => ({
  name,
  description,
  foo: (args) => (datum) => {
    datum[args.to] = foo(datum[args.left], datum[args.right]);
    return datum;
  },
  args: {
    type: "object",
    properties: {
      left: {
        type: "string",
      },
      right: {
        type: "string",
      },
      to: {
        type: "string",
      },
    },
    required: ["left", "right", "to"],
  },
});

export class Binary extends NodeSpec {
  constructor({ name, description, foo }) {
    super(baseSpec({ name, description, foo }));
  }
}

export const Add = new Binary({
  name: "add",
  description: "Add fields",
  foo: (a, b) => a + b,
});

export const Subtract = new Binary({
  name: "subtract",
  description: "Subtract fields",
  foo: (a, b) => a - b,
});
