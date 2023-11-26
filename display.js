const Display = (expression, totalInputs) => {
    const printTableHeader = () => {
        console.log("QUESTION:", expression)
        // Print table heading
        switch (totalInputs) {
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
    }

    const printFinalAnswers = (finalAnswersArray) => {
        for (let i = 0; i < finalAnswersArray.length; i++) {
            console.log(finalAnswersArray[i]);
        }
    }

    return { printTableHeader, printFinalAnswers };
}

export default Display;
