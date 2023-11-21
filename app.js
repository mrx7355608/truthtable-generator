const ques = "!(!(A + B.C) + !(A.!B))"


// ############################
//   STORE TRUTH TABLE VALUES
// ############################

// Get total number of inputs & combinations
const inputsRegex = /[a-z]/ig;
const inputsArr = ques.match(inputsRegex);
const inputsSet = new Set(inputsArr);
const inputs = Array.from(inputsSet);
const totalCombinations = 2 ** inputs.length;

// Arrays to store truth table's input
// values A, B, C, D
let a = [];
let b = [];
let c = [];
let d = [];

function decimalToBinary(number) {
    const binary = number.toString(2).padStart(inputs.length, '0');
    return binary;
}

for (i = 0; i < totalCombinations; i++) {
    const binaryNumber = decimalToBinary(i);
    const splitBinaryNumber = binaryNumber.split("");
    a.push(splitBinaryNumber[0]);

    if (inputs.length === 2) {
        b.push(splitBinaryNumber[1]);
    }
    else if (inputs.length === 3) {
        b.push(splitBinaryNumber[1]);
        c.push(splitBinaryNumber[2]);
    } else if (inputs.length === 4) {
        b.push(splitBinaryNumber[1]);
        c.push(splitBinaryNumber[2]);
        d.push(splitBinaryNumber[3]);
    }
}

// ############################
//      REPLACE OPERATORS
// ############################
// EXAMPLE: A.B + C --> A && B || C

// Replace "." with && operator
let quesWitReplacedOperators =  ques.replace(/\./g, " && ")
// Replace "+" with || operator
quesWitReplacedOperators =  quesWitReplacedOperators.replace(/\+/g, " || ")


// ############################
//        REPLACE VALUES
// ############################
// EXAMPLE: A.B + C --> 0 && 1 || 0

// Array to store replaced values and operators
const solve = []; 

// Replace input values
for (l = 0 ;l < totalCombinations; l++) {
    // Here, "a" is the array that have values of A
    let qq = quesWitReplacedOperators.replace(/A/g, a[l]); 

    if (inputs.length === 2) {
        qq = qq.replace(/B/g, b[l]);
    } else if (inputs.length === 3) {
        qq = qq.replace(/B/g, b[l]);
        qq = qq.replace(/C/g, c[l]);
    } else if (inputs.length === 4) {
        qq = qq.replace(/B/g, b[l]);
        qq = qq.replace(/C/g, c[l]);
        qq = qq.replace(/D/g, d[l]);
    }
    solve.push(qq)
}


// ############################
//           SOLVE
// ############################

// Print table heading
switch (inputs.length) {
    case 1:
        console.log("---------------------")
        console.log("|    A    |    X    |");
        console.log("---------------------")
        break;
    case 2:
        console.log("-------------------------------")
        console.log("|    A    |    B    |    X    |") 
        console.log("-------------------------------")
        break;
    case 3:
        console.log("-----------------------------------------")
        console.log("|    A    |    B    |    C    |    X    |") 
        console.log("-----------------------------------------")
        break;
    case 4:
        console.log("---------------------------------------------------")
        console.log("|    A    |    B    |    C    |    D    |    X    |") 
        console.log("---------------------------------------------------")
        break;

}

// Print the final answer along with values 
// of A, B, C and D in a table format
for (m = 0; m < solve.length; m++) {
    let ans = eval(solve[m]) == true ? "1" : "0";
    const valueOfA = a[m];
    const valueOfB = b[m];
    const valueOfC = c[m];
    const valueOfD = d[m];
    let pr = `|    ${valueOfA}    |    ${ans}    |`;
    
    if (inputs.length === 2) {
        pr = `|    ${valueOfA}    |    ${valueOfB}    |    ${ans}    |`
    }
    else if (inputs.length === 3) {
        pr = `|    ${valueOfA}    |    ${valueOfB}    |    ${valueOfC}    |    ${ans}    |`;
    } else if (inputs.length === 4) {
        pr = `|    ${valueOfA}    |    ${valueOfB}    |    ${valueOfC}    |    ${valueOfD}    |    ${ans}    |`;
    }
    process.stdout.write(pr);
    console.log("\n")
}

