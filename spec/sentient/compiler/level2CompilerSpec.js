"use strict";

var compiler = "../../../lib/sentient/compiler";
var describedClass = require(compiler + "/level2Compiler");

describe("Level2Compiler", function () {
  it("compiles a simple program", function () {
    var code = describedClass.compile({
      metadata: {
        title: "Total 100",
        description: "Find three numbers that total 100",
        author: "Chris Patuzzo",
        date: "2015-11-30"
      },
      instructions: [
        { type: "integer", symbol: "a", width: 6 },
        { type: "integer", symbol: "b", width: 6 },
        { type: "integer", symbol: "c", width: 6 },
        { type: "push", symbol: "a" },
        { type: "push", symbol: "b" },
        { type: "push", symbol: "c" },
        { type: "add" },
        { type: "add" },
        { type: "constant", value: 100 },
        { type: "equal" },
        { type: "pop", symbol: "out" },
        { type: "variable", symbol: "a" },
        { type: "variable", symbol: "b" },
        { type: "variable", symbol: "c" },
        { type: "variable", symbol: "out" }
      ]
    });

    expect(code.metadata.title).toEqual("Total 100");

    expect(code.metadata.level2Variables.a).toEqual({
      type: "integer",
      symbols: [
        "$$$_L2_INTEGER1_BIT0_$$$",
        "$$$_L2_INTEGER1_BIT1_$$$",
        "$$$_L2_INTEGER1_BIT2_$$$",
        "$$$_L2_INTEGER1_BIT3_$$$",
        "$$$_L2_INTEGER1_BIT4_$$$",
        "$$$_L2_INTEGER1_BIT5_$$$"
      ]
    });

    expect(code.instructions.length).toEqual(341);
  });
});
