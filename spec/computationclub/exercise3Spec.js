"use strict";

var Sentient = require("../../lib/sentient");

describe("Exercise 3", function () {
  var machineCode = Sentient.compile({
    instructions: [
      { type: 'integer', symbol: 'x', width: 10 },
      { type: 'integer', symbol: 'y', width: 10 },
      { type: 'integer', symbol: 'z', width: 20 },
      { type: 'push', symbol: 'x' },
      { type: 'push', symbol: 'x' },
      { type: 'multiply' },
      { type: 'push', symbol: 'y' },
      { type: 'push', symbol: 'y' },
      { type: 'multiply' },
      { type: 'add' },
      { type: 'push', symbol: 'z' },
      { type: 'push', symbol: 'z' },
      { type: 'multiply' },
      { type: 'equal' },
      { type: 'invariant' },
      { type: 'push', symbol: 'x' },
      { type: 'constant', value: 0 },
      { type: 'equal' },
      { type: 'not' },
      { type: 'invariant' },
      { type: 'push', symbol: 'y' },
      { type: 'constant', value: 0 },
      { type: 'equal' },
      { type: 'not' },
      { type: 'invariant' },
      { type: 'variable', symbol: 'x' },
      { type: 'variable', symbol: 'y' },
      { type: 'variable', symbol: 'z' }
    ]
  });

  it("can solve the equation x^2 + y^2 = z^2", function () {
    var result = Sentient.run(machineCode, { z: 5 });

    expect(result.x * result.x + result.y * result.y).toEqual(5 * 5);
  });

  it("does not find any solutions when x=0 or y=0", function () {
    var result = Sentient.run(machineCode, { x: 0 });
    expect(result).toEqual({});

    result = Sentient.run(machineCode, { y: 0 });
    expect(result).toEqual({});
  });

  it("can find a solution for z=277", function () {
    var result = Sentient.run(machineCode, { z: 277 });

    expect(result.x * result.x + result.y * result.y).toEqual(277 * 277);
  });
});
