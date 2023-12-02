const TruthTable = (expression) => {
        const a = [];
        const b = [];
        const c = [];
        const d = [];

    const getTotalInputs = () => {
        const inputsRegex = /[a-z]/ig;
        const inputsArr = expression.match(inputsRegex);
        const inputsSet = new Set(inputsArr);
        const inputs = Array.from(inputsSet);
        return inputs.length;
    }

    const getTotalCombintions = () => {
        const inputs = getTotalInputs();
        const totalCombinations = 2 ** inputs;
        return totalCombinations;
    }

    const decimalToBinary = (number, totalInputs) => {
        const binary = number.toString(2).padStart(totalInputs, '0');
        return binary;
    }

    const createBinaryCombinations = () => {
        const inputs = getTotalInputs();
        for (let i = 0; i < getTotalCombintions(); i++) {
            const binaryNumber = decimalToBinary(i, inputs)
            const splitBinaryNumber = binaryNumber.split("");
            a.push(splitBinaryNumber[0]);

            if (inputs === 2) {
                b.push(splitBinaryNumber[1]);
            }
            else if (inputs === 3) {
                b.push(splitBinaryNumber[1]);
                c.push(splitBinaryNumber[2]);
            } else if (inputs === 4) {
                b.push(splitBinaryNumber[1]);
                c.push(splitBinaryNumber[2]);
                d.push(splitBinaryNumber[3]);
            }
        }
        return [a, b, c, d]
    }

    return { 
        getTotalInputs, 
        getTotalCombintions, 
        createBinaryCombinations 
    }
}

export default TruthTable;
