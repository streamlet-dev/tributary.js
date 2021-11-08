/* ***************************************************************************
 *
 * Copyright (c) 2021, the tributary.js authors.
 *
 * This file is part of the tributary.js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

// loosely based on https://github.com/timkpaine/tributary/blob/main/tributary/streaming/node.py
import Ajv from "ajv";
import highland from "highland";

const ajv = new Ajv();

export const NodeSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    args: {
      type: "object",
      properties: {},
      required: [],
    },
  },
  required: ["name", "description", "args"],
  additionalProperties: true,
};

export const validateSpec = ajv.compile(NodeSchema);

export class Node {
  #name;
  #foo;

  /**
   *
   * @param {object} params
   * @param {string} params.name Name of node
   * @param {Function} params.foo Function to call
   */
  constructor(params) {
    const { name, foo } = params;
    this.#name = name;
    this.#foo = foo;
  }

  stream(stream) {
    return highland(stream).map(this.#foo);
  }
}

export class NodeSpec {
  #name;
  #description;
  #foo;
  #args;

  /**
   *
   * @param {object} params
   * @param {string} params.name Name of node
   * @param {string} params.description Description of node
   * @param {function} params.foo Function to call
   * @param {object} params.args JSON Schema arg spec
   */
  constructor(params) {
    if (!validateSpec(params)) {
      throw new Error("Invalid Node Spec");
    }

    const { name, description, foo, args } = params;
    this.#name = name;
    this.#description = description;
    this.#foo = foo;
    this.#args = args;
    this.validateArgs = ajv.compile(this.#args);
  }

  get name() {
    return this.#name;
  }

  get description() {
    return this.#description;
  }

  create(args) {
    if (!this.validateArgs(args)) {
      throw new Error(`Invalid args: ${JSON.stringify(args)}`);
    }
    return new Node({ name: this.#name, foo: this.#foo(args) });
  }
}
