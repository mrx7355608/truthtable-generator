const Parser = (expression) => {
    const parsedExpression = [];
    const regex = /\(([^)]+)\)/g;

    const validate = () => {
        const invalidInputsRegex = /[^!.()+ \[\]\{\}ABCD]/;

        if (!expression) {
            throw new Error("Expression is missing")
        } 

        expression = expression.trim(); // Remove spaces

        if (expression.length < 1) {
            throw new Error("Cannot parse empty expression")
        }

        if (invalidInputsRegex.test(expression)) {
            throw new Error("Invalid expression")
        }
    }

    const parse = () => {
        // Validate the equation
        validate();

        // If expression does have any brackets, return it as it is.
        const bracketRegex = /[\(\)]/
        if (!bracketRegex.test(expression)) {
            return [ expression ]
        }

        // Otherwise, parse the expression
        const parts = expression.match(regex);
        parsedExpression.push(...parts, expression);

        return parsedExpression;
    }

    return { parse };
}

export default Parser;
