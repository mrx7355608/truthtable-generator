import Parser from "./parser.js";
import Solver from "./solver.js";
import TruthTable from "./truthtable.js";
import ValueReplacer from "./valueReplacer.js";

const expression = "A.B + B.(B+C) + (A.D)"
const parser = Parser(expression)
const truthTable = TruthTable(expression)

const parsedExpression = parser.parse();
const values = truthTable.createBinaryCombinations();

const valueReplacer = ValueReplacer(parsedExpression, values[0], values[1], values[2], values[3]);
const totalCombinations = truthTable.getTotalCombintions();
const solvables = valueReplacer.replaceValues(totalCombinations);

const solver = Solver(parsedExpression, solvables)
const answers = solver.solve(totalCombinations)
console.log(answers)
