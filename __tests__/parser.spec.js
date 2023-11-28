import Parser from "../parser.js"

describe("Parser", () => {
    const parser = new Parser()

    it("should throw error when expression is not given", () => {
        expect(() => parser.parse()).toThrow("Expression is missing")
    })
    it("should not parse an empty expression", () => {
        expect(() => parser.parse(" ")).toThrow("Cannot parse empty expression")
    })
    it("should not parse expression with inputs other than A, B, C, D", () => {
        expect(() => parser.parse("F.H.3.I")).toThrow("Invalid expression")
    })
    it("should not parse expression with inputs other than A, B, C, D (2)", () => {
        expect(() => parser.parse("!(A.B) + B.(B + C).G")).toThrow("Invalid expression")
    })

    it("should return the expression as is, if it don't have brackets", () => {
        const expression = "!A.B.C.D";
        const parsedExpression = parser.parse(expression)
        expect(parsedExpression).toStrictEqual(expression);
    })
    it("should parse equations with brackets", () => {
        const expression = "!(A.B)+ C.D";
        const parsedExpression = parser.parse(expression)
        expect(parsedExpression).toStrictEqual(['(A.B)', 'C.D', '!(A.B)+ C.D'])
    })
    it("should remove left out brackets after parsing equation", () => {
        const expression = "![!(A.B) + {B.(B+C)}]";
        const parser = new Parser();
        const parsedExpression = parser.parse(expression)
        console.log(parsedExpression)
        expect(parsedExpression).toStrictEqual(["!(A.B)", "B.(B+C)", "(B+C)", "(A.B)", expression])
    })
})
