import Parser from "./parser.js";
import Solver from "./solver.js";
import TruthTable from "./truthtable.js";
import ValueReplacer from "./valueReplacer.js";

const equation = "!(A + B.C) + !(A.!B)"
const parser = new Parser(equation)
const truthTableValues = new TruthTable(equation)

const parsedEquation = parser.parse();
const values = truthTableValues.createBinaryCombinations();

const valueReplacer = new ValueReplacer(parsedEquation, values[0], values[1], values[2], values[3]);
const totalCombinations = truthTableValues.getTotalCombintions();
const solvables = valueReplacer.replaceValues(totalCombinations);

const solver = new Solver(parsedEquation, solvables);
solver.solve();

