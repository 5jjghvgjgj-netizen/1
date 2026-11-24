import test from "node:test";
import assert from "node:assert/strict";

import { greet } from "./index.ts";

test("greet 返回带名字的问候语", () => {
  assert.equal(greet("TypeScript"), "Hello, TypeScript!");
});
