const tape = require("tape"),
      color = require("../");

tape("cubehelix(…) returns an instance of cubehelix and color", function(test) {
  const c = color.cubehelix("steelblue");
  test.ok(c instanceof color.cubehelix);
  test.ok(c instanceof color.color);
  test.end();
});
