class Parser {
    constructor(equation) {
        this.partsOfQues = [];
        this.regex = /(\(.+?\))|(!?[A-Za-z]+[.!]?[A-Za-z]*)/g;
        this.eq = equation;
    }

    parse() {
        const parts = this.eq.match(this.regex);
        this.partsOfQues.push(...parts, this.eq);
        return this.partsOfQues
    }

    // TODO: add a clean function for removing
    // extra brackets that occur during parsing

}

export default Parser;
