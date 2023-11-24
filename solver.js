import { table } from "table";

class Solver {
    constructor(parsedEquation, solvables) {
        this.solvables = solvables;
        this.parsedEquation = parsedEquation;
    }

    solve(totalCombinations) {
        const answers = [];
        for (let i = 0; i < this.parsedEquation.length; i++) {
            const ques = this.parsedEquation[i];

            for (let k = 0; k < totalCombinations; k++) {
                const a = this.solvables[i * totalCombinations + k];
                a[ques] = eval(a[ques]) == true ? "1" : "0"
                answers.push(a)
            }
        }
    }
}

export default Solver;
