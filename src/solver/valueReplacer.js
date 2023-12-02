const ValueReplacer = (parsedEquationArray, A, B, C, D) => {
        const parsedEquation = parsedEquationArray;
        const a = A;
        const b = B;
        const c = C;
        const d = D;

    const replaceOperators = () => {
        const totalParts = parsedEquation.length;
        const replacedOperators = []
        for (let i = 0; i < totalParts; i++) {
            let cp = parsedEquation[i];
            cp = cp.replace(/\./g, " && ")
            cp = cp.replace(/\+/g, " || ")
            replacedOperators.push(cp)
        }

        return replacedOperators;
    }

    const replaceValues = (totalCombinations) => {
        const solvables = [];
        const totalParts = parsedEquation.length;
        const replacedOperatorsArray = replaceOperators();
        
        for (let i = 0; i < totalParts; i++) {
            for  (let j = 0; j < totalCombinations; j++) {
                let currentPart = replacedOperatorsArray[i].replace(/A/g, a[j])
                currentPart = currentPart.replace(/B/g, b[j])
                currentPart = currentPart.replace(/C/g, c[j])
                currentPart = currentPart.replace(/D/g, d[j])
                const ans = {};
                ans[parsedEquation[i]] = currentPart;
                solvables.push(ans)
            }
        }
        return solvables;
    }

    return {
        replaceOperators,
        replaceValues
    }
}

export default ValueReplacer
