const test = require("node:test");
const assert = require("node:assert");
const { handler } = require("../server");

test("health returns ok", () => {
  let body = "";
  handler({ url: "/health" }, { end: (b) => { body = b; } });
  assert.strictEqual(body, "ok");
});
