const ValueReplacer = (parsedExpression, values) => {
    const { a, b, c, d } = values;

    const replaceOperators = () => {
        const replacedOperators = []
        for (let i = 0; i < parsedExpression.length; i++) {
            let cp = parsedExpression[i];
            cp = cp.replace(/\./g, " && ")
            cp = cp.replace(/\+/g, " || ")
            replacedOperators.push(cp)
        }

        return replacedOperators;
    }

    const replaceValues = (totalCombinations) => {
        const solvables = {};
        // This func returns an array in which the regular 
        // operators are replaced with javascript operators.
        // EXAMPLE: 
        //  * A.B -> A && B, 
        //  * B+C -> B || C
        const expressions = replaceOperators();

        for (let i = 0; i < parsedExpression.length; i++) {
            const currentExpression = parsedExpression[i];
            const expressionValues = [];
            // This for loop replaces the A, B, C and D with their
            // values in the above expressions
            for  (let j = 0; j < totalCombinations; j++) {
                let currentPart = expressions[i].replace(/A/g, a[j])
                currentPart = currentPart.replace(/B/g, b[j])
                currentPart = currentPart.replace(/C/g, c[j])
                currentPart = currentPart.replace(/D/g, d[j])
                expressionValues.push(currentPart)
            }
            // Creates an entry in the solvables object
            // with "expression" as key
            solvables[currentExpression] = expressionValues;
        }
        return solvables;
    }

    return {
        replaceOperators,
        replaceValues
    }
}

export default ValueReplacer
