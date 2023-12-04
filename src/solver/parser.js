const Parser = (expression) => {
    const parsedExpression = [];
    const regex = /\(([^)]+)\)/g;

    const parse = () => {
        // If expression does have any brackets, return it as it is.
        const bracketRegex = /[\(\)]/
        if (!bracketRegex.test(expression)) {
            return [expression]
        }

        // Otherwise, parse the expression
        const subExpressions = expression.match(regex);
        parsedExpression.push(...subExpressions, expression);
        return parsedExpression;
    }

    return { parse };
}

export default Parser;
