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
// Array containing ques, with replaced values and operators
// E.g: A.B + C ==> 0 && 1 || 0
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

// Replace "." with && operator
let quesWitReplacedOperators =  ques.replace(/\./g, " && ")
// Replace "+" with || operator
quesWitReplacedOperators =  quesWitReplacedOperators.replace(/\+/g, " || ")


// Replace input values
for (l = 0 ;l < totalCombinations; l++) {
    // It replaces A, B, C and D (in the ques) with their 
    // respective values (0s and 1s) stored in arrays a, b, c, d
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

// Print the solved value along with values of A, B, C and D
// ------------------------------------------
// |    A   |   B   |   C   |   D   |   X   |
// ------------------------------------------
// |    0   |   0   |   0   |   0   |   0   |
// |    0   |   0   |   0   |   1   |   1   |
// ...
for (m = 0; m < solve.length; m++) {
    let ans = eval(solve[m]) == true ? "1" : "0";
    const pr = `|    ${a[m]}    |    ${b[m]}    |    ${c[m]}    |    ${ans}    |`;
    process.stdout.write(pr);
    console.log("\n")
}


