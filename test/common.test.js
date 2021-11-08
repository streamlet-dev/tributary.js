/* eslint-disable no-unused-vars */
/* ***************************************************************************
 *
 * Copyright (c) 2021, the tributary.js authors.
 *
 * This file is part of the tributary.js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
/* eslint-disable no-undef */

const base = require("../src/js");

afterEach(async () => {
  await new Promise((r) => setTimeout(r, 500));
});

describe("Base", () => {
  test("base", async () => {
    expect(base).toBeTruthy();
  });
});
