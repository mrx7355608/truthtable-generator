import Parser from "./parser.js";
import TruthTableGenerator from "./truthtable.js";
import ValueAndOperatorsReplacer from "./valueReplacer.js";
import Display from "./display.js"
import Solver from "./solver.js";

export default function main(expression) {
    // Parsing (sasti wali > ~ <)
    const parser = Parser(expression);
    const totalInputs = parser.getInputsFromExpr()
    const totalCombinations = parser.getTotalCombinations();

    // Generating truth table values
    const truthTableGen = TruthTableGenerator(totalInputs, totalCombinations)
    const { a, b, c, d } = truthTableGen.createTruthTableValues()

    // Replace values and operators of given expression
    const replacer = ValueAndOperatorsReplacer(a,b,c,d, expression)
    replacer.replaceOperators()
    const solvables = replacer.replaceValues(totalInputs, totalCombinations);

    // Solve
    const solver = Solver(a,b,c,d,solvables);
    const finalAnswersArray = solver.solve(totalInputs); 

    // Display values
    const display = Display(expression, totalInputs);
    display.printTableHeader();
    display.printFinalAnswers(finalAnswersArray)

    return finalAnswersArray;
}
