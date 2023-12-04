const TruthTable = (expression) => {
    const a = [];
    const b = [];
    const c = [];
    const d = [];

    const getTotalInputs = () => {
        // Detect alphabets in the given expression
        const inputsRegex = /[a-z]/ig;
        const inputsArr = expression.match(inputsRegex);
        // Create a set to remove duplicate values
        const inputsSet = new Set(inputsArr);

        // Return the count of unique elements in the set
        return inputsSet.size;
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
            // Converts the current value of "i" into
            // a binary number, because the loop will run
            // according to total possible combinations
            // 0 -> 4   (for 2 inputs)
            // 0 -> 7   (for 3 inputs)
            // 0 -> 15  (for 4 inputs)
            const binaryNumber = decimalToBinary(i, inputs)

            // Converts 000 -> [0, 0, 0], here the first value is a, 
            // second is b and so on
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
        return {
            a,
            b,
            c,
            d
        }
    }

    return { 
        getTotalInputs, 
        getTotalCombintions, 
        createBinaryCombinations 
    }
}

export default TruthTable;
