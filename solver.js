const Solver = (a,b,c,d,solvables) => {
    const solve = (totalInputs) => {
        // Print the final answer along with values 
        // of A, B, C and D in a table format
        for (let m = 0; m < solvables.length; m++) {
            let ans = eval(solvables[m]) == true ? "1" : "0";
            const valueOfA = a[m];
            const valueOfB = b[m];
            const valueOfC = c[m];
            const valueOfD = d[m];
            let pr = `|    ${valueOfA}    |    ${ans}    |`;

            if (totalInputs === 2) {
                pr = `|    ${valueOfA}    |    ${valueOfB}    |    ${ans}    |`
            }
            else if (totalInputs === 3) {
                pr = `|    ${valueOfA}    |    ${valueOfB}    |    ${valueOfC}    |    ${ans}    |`;
            } else if (totalInputs === 4) {
                pr = `|    ${valueOfA}    |    ${valueOfB}    |    ${valueOfC}    |    ${valueOfD}    |    ${ans}    |`;
            }
            process.stdout.write(pr);
            console.log("\n")
        }
    }
    return { solve }
}

export default Solver;
