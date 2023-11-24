class ValueReplacer {
    constructor(parts, A, B, C, D) {
        this.partsOfQues = parts;
        this.a = A;
        this.b = B;
        this.c = C;
        this.d = D;
    }

    replaceOperators() {
        const totalParts = this.partsOfQues.length;
        for (let i = 0; i < totalParts; i++) {
            let cp = this.partsOfQues[0];
            cp = cp.replace(/\./g, " && ")
            cp = cp.replace(/\+/g, " || ")
            this.partsOfQues.push(cp)
            this.partsOfQues.shift();
        }
    }

    replaceValues(totalInputs, totalCombinations) {
        const solvables = [];
        const totalParts = this.partsOfQues.length;

        for (let i = 0; i < totalParts; i++) {
            let cp = this.partsOfQues[i];

            for  (let j = 0; j < totalCombinations; j++) {
                cp = cp.replace(/A/g, this.a[j])
                console.log(cp)

                if (totalInputs === 2) {
                    cp = cp.replace(/B/g, this.b[j])
                }
                else if (totalInputs === 3) {
                    cp = cp.replace(/B/g, this.b[j])
                    cp = cp.replace(/C/g, this.c[j])
                }
                else if (totalInputs === 4) {
                    cp = cp.replace(/B/g, this.b[j])
                    cp = cp.replace(/C/g, this.c[j])
                    cp = cp.replace(/D/g, this.d[j])
                }
                solvables.push(cp)
            }
        }
        console.log(solvables)

    }
}


const a = ['0','0','1','1']
const b = ['0','1','0','1']
const tt = new ValueReplacer(["A.B", "A+B"], a, b, [], [])
tt.replaceOperators();
tt.replaceValues(2, 4);
console.log(tt.partsOfQues)
