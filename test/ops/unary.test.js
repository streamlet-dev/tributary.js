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
const { Invert, Negate } = require("../../src/js");

describe("Unary", () => {
  test("invert", async () => {
    const stream = Invert.create({ name: "val" });
    stream.stream([{ val: 1 }, { val: 2 }, { val: 3 }]).toArray((result) => {
      expect(result).toEqual([{ val: 1 }, { val: 1 / 2 }, { val: 1 / 3 }]);
    });
  });

  test("negate", async () => {
    const stream = Negate.create({ name: "val" });
    stream.stream([{ val: 1 }, { val: 2 }, { val: 3 }]).toArray((result) => {
      expect(result).toEqual([{ val: -1 }, { val: -2 }, { val: -3 }]);
    });
  });
});
