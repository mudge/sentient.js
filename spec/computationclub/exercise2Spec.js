"use strict";

var Sentient = require("../../lib/sentient");

describe("Exercise 2", function () {
  var machineCode = Sentient.compile({
    instructions: [
      { type: 'integer', symbol: 'x', width: 8 },
      { type: 'integer', symbol: 'y', width: 8 },
      { type: 'push', symbol: 'x' },
      { type: 'push', symbol: 'x' },
      { type: 'multiply' },
      { type: 'push', symbol: 'y' },
      { type: 'push', symbol: 'y' },
      { type: 'multiply' },
      { type: 'add' },
      { type: 'constant', value: 90 },
      { type: 'equal' },
      { type: 'invariant' },
      { type: 'variable', symbol: 'x' },
      { type: 'variable', symbol: 'y' }
    ]
  });

  it("can solve the equation x^2 + y^2 = 90", function () {
    var result = Sentient.run(machineCode, {});

    expect(result.x * result.x + result.y * result.y).toEqual(90);
  });

  it("can find a solution when x=-3", function () {
    var result = Sentient.run(machineCode, { x: -3 });

    expect((-3 * -3) + result.y * result.y).toEqual(90);
  });

  it("does not find any solutions when x=1", function () {
    var result = Sentient.run(machineCode, { x: 1 });

    expect(result).toEqual({});
  });
});
