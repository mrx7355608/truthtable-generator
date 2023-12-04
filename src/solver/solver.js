const Solver = (values, parsedEquation, solvables) => {
    const { a, b, c, d } = values;

    const solve = (totalCombinations) => {
        const answers = [];
        const expressions = Object.keys(solvables);
        for (let i = 0; i < totalCombinations; i++) {
            const answerObject = {
                a: a[i],
                b: b ? b[i] : null,
                c: c ? c[i] : null,
                d: d ? d[i] : null,
            }
            for (let k = 0; k < expressions.length; k++) {
                const currentExpr = expressions[k];
                const element = solvables[currentExpr][i];
                answerObject[currentExpr] = eval(element) ? "1" : "0";
            }
            answers.push(answerObject);
        }
        return answers
   }

    return { solve };
}

export default Solver;
