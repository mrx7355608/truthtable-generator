class Parser {
    constructor() {
        this.parsedExpression = [];
        this.regex = /\(([^)]+)\)/g;
    }

    validate(expression) {
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

    parse(expression) {
        // Validate the equation
        // this.validate(expression);

        // If expression does have any brackets, return it as it is.
        const bracketRegex = /[\(\)]/
        if (!bracketRegex.test(expression)) {
            return expression
        }

        // Otherwise, parse the expression
        const parts = expression.match(this.regex);
        this.parsedExpression.push(...parts, expression);

        return this.parsedExpression
    }
}

export default Parser;
