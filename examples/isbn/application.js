/* globals document */
/* jshint maxcomplexity:false */

"use strict";

var Application = function () {
  var self = this;
  var program;

  self.run = function () {
    program = compileProgram();
    self.update();
  };

  self.update = function () {
    var tenDigit = [],
        thirteenDigit = [];

    for (var i = 0; i < 10; i += 1) {
      var value = document.getElementById('ten' + i).value;

      tenDigit[i] = value ? parseInt(value, 10) : undefined;
    }

    for (var i = 0; i < 13; i += 1) {
      var value = document.getElementById('thirteen' + i).value;

      thirteenDigit[i] = value ? parseInt(value, 10) : undefined;
    }

    var result = Sentient.run(program, { tenDigit: tenDigit, thirteenDigit: thirteenDigit });

    if (result.tenDigit) {
      for (var i = 0; i < 10; i += 1) {
        document.getElementById('ten' + i).value = result.tenDigit[i];
      }
    }

    if (result.thirteenDigit) {
      for (var i = 0; i < 13; i += 1) {
        document.getElementById('thirteen' + i).value = result.thirteenDigit[i];
      }
    }
  };

  var compileProgram = function () {
    var program = {
      "metadata": {
        "title": "ISBN",
        "description": "Convert ISBNs between 10 and 13 digits",
        "author": "Paul Mucur",
        "date": "2016-03-17"
      },
      instructions: [
        { type: 'integer', symbol: 'ten0', width: 5 },
        { type: 'integer', symbol: 'ten1', width: 5 },
        { type: 'integer', symbol: 'ten2', width: 5 },
        { type: 'integer', symbol: 'ten3', width: 5 },
        { type: 'integer', symbol: 'ten4', width: 5 },
        { type: 'integer', symbol: 'ten5', width: 5 },
        { type: 'integer', symbol: 'ten6', width: 5 },
        { type: 'integer', symbol: 'ten7', width: 5 },
        { type: 'integer', symbol: 'ten8', width: 5 },
        { type: 'integer', symbol: 'tenCheckDigit', width: 5 },
        { type: 'integer', symbol: 'thirteenCheckDigit', width: 5 },

        { type: 'push', symbol: 'ten0' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten0' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten1' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten1' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten2' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten2' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten3' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten3' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten4' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten4' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten5' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten5' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten6' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten6' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten7' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten7' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten8' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'ten8' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'tenCheckDigit' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'tenCheckDigit' },
        { type: 'constant', value: 10 },
        { type: 'lessequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'thirteenCheckDigit' },
        { type: 'constant', value: 0 },
        { type: 'greaterequal' },
        { type: 'invariant' },
        { type: 'push', symbol: 'thirteenCheckDigit' },
        { type: 'constant', value: 9 },
        { type: 'lessequal' },
        { type: 'invariant' },

        { type: 'push', symbol: 'ten0' },
        { type: 'push', symbol: 'ten1' },
        { type: 'push', symbol: 'ten2' },
        { type: 'push', symbol: 'ten3' },
        { type: 'push', symbol: 'ten4' },
        { type: 'push', symbol: 'ten5' },
        { type: 'push', symbol: 'ten6' },
        { type: 'push', symbol: 'ten7' },
        { type: 'push', symbol: 'ten8' },
        { type: 'push', symbol: 'tenCheckDigit' },
        { type: 'collect', width: 10 },
        { type: 'pop', symbol: 'tenDigit' },

        // ISBN-10 check digit
        { type: 'push', symbol: 'ten0' },
        { type: 'push', symbol: 'ten1' },
        { type: 'constant', value: 2 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'ten2' },
        { type: 'constant', value: 3 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'ten3' },
        { type: 'constant', value: 4 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'ten4' },
        { type: 'constant', value: 5 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'ten5' },
        { type: 'constant', value: 6 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'ten6' },
        { type: 'constant', value: 7 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'ten7' },
        { type: 'constant', value: 8 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'ten8' },
        { type: 'constant', value: 9 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'push', symbol: 'tenCheckDigit' },
        { type: 'constant', value: 10 },
        { type: 'multiply' },
        { type: 'add' },
        { type: 'constant', value: 11 },
        { type: 'modulo' },
        { type: 'constant', value: 0 },
        { type: 'equal' },
        { type: 'invariant' },

        // ISBN-13 check digit
        { type: 'constant', value: 9 },
        { type: 'constant', value: 8 },
        { type: 'add' },
        { type: 'push', symbol: 'ten1' },
        { type: 'add' },
        { type: 'push', symbol: 'ten3' },
        { type: 'add' },
        { type: 'push', symbol: 'ten5' },
        { type: 'add' },
        { type: 'push', symbol: 'ten7' },
        { type: 'add' },
        { type: 'push', symbol: 'thirteenCheckDigit' },
        { type: 'add' },

        { type: 'constant', value: 7 },
        { type: 'push', symbol: 'ten0' },
        { type: 'add' },
        { type: 'push', symbol: 'ten2' },
        { type: 'add' },
        { type: 'push', symbol: 'ten4' },
        { type: 'add' },
        { type: 'push', symbol: 'ten6' },
        { type: 'add' },
        { type: 'push', symbol: 'ten8' },
        { type: 'add' },

        { type: 'constant', value: 3 },
        { type: 'multiply' },
        { type: 'add' },

        { type: 'constant', value: 10 },
        { type: 'modulo' },
        { type: 'constant', value: 0 },
        { type: 'equal' },
        { type: 'invariant' },

        { type: 'constant', value: 9 },
        { type: 'constant', value: 7 },
        { type: 'constant', value: 8 },
        { type: 'push', symbol: 'ten0' },
        { type: 'push', symbol: 'ten1' },
        { type: 'push', symbol: 'ten2' },
        { type: 'push', symbol: 'ten3' },
        { type: 'push', symbol: 'ten4' },
        { type: 'push', symbol: 'ten5' },
        { type: 'push', symbol: 'ten6' },
        { type: 'push', symbol: 'ten7' },
        { type: 'push', symbol: 'ten8' },
        { type: 'push', symbol: 'thirteenCheckDigit' },
        { type: 'collect', width: 13 },
        { type: 'pop', symbol: 'thirteenDigit' },

        { type: 'variable', symbol: 'thirteenDigit' },
        { type: 'variable', symbol: 'tenDigit' }
      ]
    };

    return Sentient.compile(program);
  };
};

window.Application = Application;
