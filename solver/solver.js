const Solver = (parsedEquation, solvables) => {
    const solve = (totalCombinations) => {
        const answers = [];
        for (let i = 0; i < parsedEquation.length; i++) {
            const ques = parsedEquation[i];

            for (let k = 0; k < totalCombinations; k++) {
                const a = solvables[i * totalCombinations + k];
                a[ques] = eval(a[ques]) == true ? "1" : "0"
                answers.push(a)
            }
        }
        return answers;
    }

    return { solve };
}

export default Solver;
