"use strict";

var Stack = require("./common/stack");
var SymbolTable = require("./level1Compiler/symbolTable");
var Registry = require("./level1Compiler/registry");
var CodeWriter = require("./level1Compiler/codeWriter");
var InstructionSet = require("./level1Compiler/instructionSet");
var _ = require("underscore");

var Compiler = function (input) {
  var self = this;

  var stack = new Stack();
  var symbolTable = new SymbolTable();
  var registry = new Registry();
  var codeWriter = new CodeWriter();

  var instructionSet = new InstructionSet({
    stack: stack,
    symbolTable: symbolTable,
    registry: registry,
    codeWriter: codeWriter
  });

  self.compile = function () {
    if (input.metadata) {
      codeWriter.metadata(input.metadata);
    }

    _.each(input.instructions, function (instruction) {
      instructionSet.call(instruction);
    });

    return codeWriter.write();
  };
};

Compiler.compile = function (input) {
  return new Compiler(input).compile();
};

module.exports = Compiler;
