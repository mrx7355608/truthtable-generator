class ValueReplacer {
    constructor(parsedEquationArray, A, B, C, D) {
        this.parsedEquation = parsedEquationArray;
        this.a = A;
        this.b = B;
        this.c = C;
        this.d = D;
    }

    replaceOperators() {
        const totalParts = this.parsedEquation.length;
        const replacedOperators = []
        for (let i = 0; i < totalParts; i++) {
            let cp = this.parsedEquation[0];
            cp = cp.replace(/\./g, " && ")
            cp = cp.replace(/\+/g, " || ")
            replacedOperators.push(cp)
        }

        return replacedOperators;
    }

    replaceValues(totalCombinations) {
        const solvables = [];
        const totalParts = this.parsedEquation.length;
        const replacedOperatorsArray = this.replaceOperators();

        for (let i = 0; i < totalParts; i++) {
            for  (let j = 0; j < totalCombinations; j++) {
                let currentPart = replacedOperatorsArray[i].replace(/A/g, this.a[j])
                currentPart = currentPart.replace(/B/g, this.b[j])
                currentPart = currentPart.replace(/C/g, this.c[j])
                currentPart = currentPart.replace(/D/g, this.d[j])
                const ans = {};
                ans[this.parsedEquation[i]] = currentPart;
                solvables.push(ans)
            }
        }
        return solvables;
    }
}

export default ValueReplacer
