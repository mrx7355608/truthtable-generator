const ques = "A.B + A.C"

// Get total number of inputs & combinations
const inputsRegex = /[a-z]/ig;
const inputsArr = ques.match(inputsRegex);
const inputsSet = new Set(inputsArr);
const inputs = Array.from(inputsSet);
const totalCombinations = 2 ** inputs.length;

// Create a truth table for all combinations
let a = [];
let b = [];
let c = [];
let d = [];
const solve = [];

function decimalToBinary(number) {
    const binary = number.toString(2).padStart(inputs.length, '0');
    return binary;
}

for (i = 0; i < totalCombinations; i++) {
    const binaryNumber = decimalToBinary(i);
    const splitBinaryNumber = binaryNumber.split("");
    a.push(splitBinaryNumber[0]);
    b.push(splitBinaryNumber[1]);

    if (inputs.length === 3) {
        c.push(splitBinaryNumber[2]);
    } else if (inputs.length === 4) {
        d.push(splitBinaryNumber[3]);
    }
}

// Replace all operators
let quesWitReplacedOperators =  ques.replace(/\./g, " && ")
quesWitReplacedOperators =  quesWitReplacedOperators.replace(/\+/g, " || ")


// Replace input values
for (l = 0 ;l < totalCombinations; l++) {
    let qq = quesWitReplacedOperators.replace(/A/g, a[l]);
    qq = qq.replace(/B/g, b[l]);

    if (inputs.length === 3) {
        qq = qq.replace(/C/g, c[l]);
    } else if (inputs.length === 4) {
        qq = qq.replace(/D/g, d[l]);
    }
    solve.push(qq)
}

console.log(`QUESTION: ${ques}`)
console.log("-----------------------------------------")
console.log("|    A    |    B    |    C    |    X    |")
console.log("-----------------------------------------")

// Print the solved value
for (m = 0; m < solve.length; m++) {
    let ans = eval(solve[m]) ? "1" : "0";
    const pr = `|    ${a[m]}    |    ${b[m]}    |    ${c[m]}    |    ${ans}    |`;
    process.stdout.write(pr);
    console.log("\n")
}


