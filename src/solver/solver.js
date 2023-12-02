const Solver = (a,b,c,d,solvables) => {
    const getTableHeader = (totalInputs) => {
        let tableHeader;
        // Print table heading
        switch (totalInputs) {
            case 1:
                tableHeader = "|    A    |    X    |";
                break;
            case 2:
                tableHeader = "|    A    |    B    |    X    |"
                break;
            case 3:
                tableHeader = "|    A    |    B    |    C    |    X    |"
                break;
            case 4:
                tableHeader = "|    A    |    B    |    C    |    D    |    X    |"
                break;
        }
        return tableHeader;
    }

    const solve = (totalInputs) => {
        const finalAnswersArray = [];

        for (let m = 0; m < solvables.length; m++) {
            let ans = eval(solvables[m]) == true ? "1" : "0";
            const valueOfA = a[m];
            const valueOfB = b[m];
            const valueOfC = c[m];
            const valueOfD = d[m];
            let pr = {
                a: valueOfA,
                answer: ans
            }

            if (totalInputs === 2) {
                pr = {
                    a: valueOfA,
                    b: valueOfB,
                    answer: ans
                }
            }
            else if (totalInputs === 3) {
                pr = {
                    a: valueOfA,
                    b: valueOfB,
                    c: valueOfC,
                    answer: ans
                }
            } else if (totalInputs === 4) {
                pr = {
                    a: valueOfA,
                    b: valueOfB,
                    c: valueOfC,
                    d: valueOfD,
                    answer: ans
                }
            }
            finalAnswersArray.push(pr);
        }
        return { finalAnswersArray, totalInputs };
    }
    return { solve }
}

export default Solver;
