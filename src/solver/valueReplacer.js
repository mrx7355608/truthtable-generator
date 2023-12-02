const ValueAndOperatorsReplacer = (a, b, c, d, expression) => {
    let exprWitReplacedOperators;

    const replaceOperators = () => {
        // Replace "." with && operator
        exprWitReplacedOperators =  expression.replace(/\./g, " && ")
        // Replace "+" with || operator
        exprWitReplacedOperators =  exprWitReplacedOperators.replace(/\+/g, " || ")
        return exprWitReplacedOperators;
    }

    const replaceValues = (totalInputs, totalCombinations) => {
        const solvables = []; 
        // Replace input values
        for (let l = 0 ;l < totalCombinations; l++) {
            // Here, "a" is the array that have values of A
            let qq = exprWitReplacedOperators.replace(/A/g, a[l]); 

            if (totalInputs === 2) {
                qq = qq.replace(/B/g, b[l]);
            } else if (totalInputs === 3) {
                qq = qq.replace(/B/g, b[l]);
                qq = qq.replace(/C/g, c[l]);
            } else if (totalInputs === 4) {
                qq = qq.replace(/B/g, b[l]);
                qq = qq.replace(/C/g, c[l]);
                qq = qq.replace(/D/g, d[l]);
            }
            solvables.push(qq)
        }
        return solvables;
    }

    return {
        replaceOperators,
        replaceValues
    }
}

export default ValueAndOperatorsReplacer;
