const Parser = (expression) => {
    let totalInputs;

    const getInputsFromExpr = () => {
        const inputsRegex = /[a-z]/ig;
        const inputsArr = expression.match(inputsRegex);
        const inputsSet = new Set(inputsArr);
        const inputs = Array.from(inputsSet);
        totalInputs = inputs.length;
        return totalInputs;
    }

    const getTotalCombinations = () => 2 ** totalInputs

    return {
        getInputsFromExpr,
        getTotalCombinations
    }
}

export default Parser;
