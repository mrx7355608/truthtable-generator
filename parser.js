const Parser = (expression) => {
    const getInputsFromExpr = () => {
        const inputsRegex = /[a-z]/ig;
        const inputsArr = expression.match(inputsRegex);
        const inputsSet = new Set(inputsArr);
        const inputs = Array.from(inputsSet);
        return inputs.length
    }

    const getTotalCombinations = (totalInputs) => 2 ** totalInputs

    return {
        getInputsFromExpr,
        getTotalCombinations
    }
}

export default Parser;
