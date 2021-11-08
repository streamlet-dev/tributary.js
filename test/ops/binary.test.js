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
const { Add, Subtract } = require("../../src/js");

describe("Binary", () => {
  test("add", async () => {
    const stream = Add.create({ left: "left", right: "right", to: "to" });
    stream
      .stream([
        { left: 1, right: 2 },
        { left: 1, right: 3 },
        { left: 2, right: 3 },
      ])
      .toArray((result) => {
        expect(result).toEqual([
          { left: 1, right: 2, to: 3 },
          { left: 1, right: 3, to: 4 },
          { left: 2, right: 3, to: 5 },
        ]);
      });
  });

  test("subtract", async () => {
    const stream = Subtract.create({ left: "left", right: "right", to: "to" });
    stream
      .stream([
        { left: 1, right: 2 },
        { left: 1, right: 3 },
        { left: 2, right: 3 },
      ])
      .toArray((result) => {
        expect(result).toEqual([
          { left: 1, right: 2, to: -1 },
          { left: 1, right: 3, to: -2 },
          { left: 2, right: 3, to: -1 },
        ]);
      });
  });
});
