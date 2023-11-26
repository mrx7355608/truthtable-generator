const Display = () => {
    const printFinalAnswers = (finalAnswersArray) => {
        for (let i = 0; i < finalAnswersArray.length; i++) {
            console.log(finalAnswersArray[i]);
        }
    }

    return { printFinalAnswers };
}

export default Display;
