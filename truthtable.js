class TruthTable {
    constructor(equation) {
        this.eq = equation;
        this.a = [];
        this.b = [];
        this.c = [];
        this.d = [];
    }

    getTotalInputs() {
        const inputsRegex = /[a-z]/ig;
        const inputsArr = this.eq.match(inputsRegex);
        const inputsSet = new Set(inputsArr);
        const inputs = Array.from(inputsSet);
        return inputs.length;
    }

    getTotalCombintions() {
        const inputs = this.getTotalInputs();
        const totalCombinations = 2 ** inputs;
        return totalCombinations;
    }


    createBinaryCombinations() {
        const inputs = this.getTotalInputs();
        for (let i = 0; i < this.getTotalCombintions(); i++) {
            const binaryNumber = this.decimalToBinary(i, inputs)
            const splitBinaryNumber = binaryNumber.split("");
            this.a.push(splitBinaryNumber[0]);

            if (inputs === 2) {
                this.b.push(splitBinaryNumber[1]);
            }
            else if (inputs === 3) {
                this.b.push(splitBinaryNumber[1]);
                this.c.push(splitBinaryNumber[2]);
            } else if (inputs === 4) {
                this.b.push(splitBinaryNumber[1]);
                this.c.push(splitBinaryNumber[2]);
                this.d.push(splitBinaryNumber[3]);
            }
        }
        return [this.a, this.b, this.c, this.d]
    }

    decimalToBinary(number, totalInputs) {
        const binary = number.toString(2).padStart(totalInputs, '0');
        return binary;
    }
}

export default TruthTable;
