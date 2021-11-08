/* ***************************************************************************
 *
 * Copyright (c) 2021, the tributary.js authors.
 *
 * This file is part of the tributary.js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const highland = require("highland");
const { VERSION, NodeSpec } = require("../src/js");

afterEach(async () => {
  await new Promise((r) => setTimeout(r, 500));
});

describe("VERSION", () => {
  test("VERSION", async () => {
    expect(VERSION).toBeTruthy();
  });
});

const BASE_ARGSPEC = {
  type: "object",
  properties: {},
};

describe("Base", () => {
  test("no-op", async () => {
    const nodeSpec = new NodeSpec({
      name: "Test",
      description: "",
      foo: (args) => (datum) => datum,
      args: {
        type: "object",
        properties: {},
        required: [],
      },
    });

    const stream = nodeSpec.create({});

    stream.stream([1, 2, 3]).toArray((result) => {
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
