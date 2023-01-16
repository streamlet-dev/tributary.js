/* ***************************************************************************
 *
 * Copyright (c) 2021, the tributary.js authors.
 *
 * This file is part of the tributary.js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-param-reassign */

import {NodeSpec} from "../base";

const baseSpec = ({name, description, foo}) => ({
  name,
  description,
  foo: (args) => (datum) => {
    datum[args.to || args.name] = foo(datum[args.name]);
    return datum;
  },
  args: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      to: {
        type: "string",
      },
    },
    required: ["name"],
  },
});

export class Unary extends NodeSpec {
  constructor({name, description, foo}) {
    super(baseSpec({name, description, foo}));
  }
}

export const Negate = new Unary({
  name: "negate",
  description: "Negate field",
  foo: (val) => -1 * val,
});

export const Invert = new Unary({
  name: "invert",
  description: "Invert field",
  foo: (val) => 1 / val,
});
