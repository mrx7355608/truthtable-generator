import Parser from "./parser.js";
import TruthTableGenerator from "./truthtable.js";
import ValueAndOperatorsReplacer from "./valueReplacer.js";
import Display from "./display.js"
import Solver from "./solver.js";

const expression = "!(!(A + B.C) + !(A.!B))"

// Parsing (sasti wali > ~ <)
const parser = Parser(expression);
const totalInputs = parser.getInputsFromExpr()
const totalCombinations = parser.getTotalCombinations(totalInputs);

// Generating truth table values
const truthTableGen = TruthTableGenerator(totalInputs, totalCombinations)
const { a, b, c, d } = truthTableGen.createTruthTableValues()

// Replace values and operators
const replacer = ValueAndOperatorsReplacer(a,b,c,d, expression)
replacer.replaceOperators()
const solvables = replacer.replaceValues(totalInputs, totalCombinations);

// Display values
const display = Display(expression, totalInputs);
display.printTableHeader();

// Solve
const solver = Solver(a,b,c,d,solvables);
// Also prints the solved values table
solver.solve(totalInputs); 


