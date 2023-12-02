import Parser from "./parser.js";
import Solver from "./solver.js";
import TruthTable from "./truthtable.js";
import ValueReplacer from "./valueReplacer.js";

export const main = (expression) => {
    const parser = Parser(expression)
    const truthTable = TruthTable(expression)

    const parsedExpression = parser.parse();
    const values = truthTable.createBinaryCombinations();

    const valueReplacer = ValueReplacer(parsedExpression, values[0], values[1], values[2], values[3]);
    const totalCombinations = truthTable.getTotalCombintions();
    const solvables = valueReplacer.replaceValues(totalCombinations);
    console.log({ solvables });

    const solver = Solver(parsedExpression, solvables)
    const answers = solver.solve(totalCombinations)
    const data = {
        a: values[0],
        b: values[1].length > 0 ? values[1] : undefined,
        c: values[2].length > 0 ? values[2] : undefined,
        d: values[3].length > 0 ? values[3] : undefined,
        answers
    }
    return data;
}
