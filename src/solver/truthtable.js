const TruthTableGenerator = (totalInputs, totalCombinations) => {
    const _decimalToBinary = (number) => {
        const binary = number.toString(2).padStart(totalInputs, '0');
        return binary;
    }

    const createTruthTableValues = () => {
        const a = [];
        const b = [];
        const c = [];
        const d = [];

        for (let i = 0; i < totalCombinations; i++) {
            const binaryNumber = _decimalToBinary(i);
            const splitBinaryNumber = binaryNumber.split("");
            a.push(splitBinaryNumber[0]);

            if (totalInputs === 2) {
                b.push(splitBinaryNumber[1]);
            }
            else if (totalInputs === 3) {
                b.push(splitBinaryNumber[1]);
                c.push(splitBinaryNumber[2]);
            } else if (totalInputs === 4) {
                b.push(splitBinaryNumber[1]);
                c.push(splitBinaryNumber[2]);
                d.push(splitBinaryNumber[3]);
            }
        }
        return { a, b, c, d }
    }

    return {
        createTruthTableValues
    }
}

export default TruthTableGenerator;
