import Parser from "./parser.js";
import Solver from "./solver.js";
import TruthTable from "./truthtable.js";
import ValueReplacer from "./valueReplacer.js";

export const main = (expression) => {
    const parser = Parser(expression)
    const truthTable = TruthTable(expression)

    const parsedExpression = parser.parse();
    const values = truthTable.createBinaryCombinations();

    const valueReplacer = ValueReplacer(parsedExpression, values)
    const solvables = valueReplacer.replaceValues(truthTable.getTotalCombintions());

    const solver = Solver(values, parsedExpression, solvables)
    const data = solver.solve(truthTable.getTotalCombintions())
    return data;
}
