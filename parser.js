class Parser {
    constructor(equation) {
        this.partsOfQues = [];
        this.regex = /(\(.+?\))|(!?[A-Za-z]+[.!]?[A-Za-z]*)/g;
        this.eq = equation;
    }

    parse() {
        const parts = this.eq.match(this.regex);
        this.partsOfQues.push(...parts, this.eq);
    }

    // TODO: add a clean function for removing
    // extra brackets that occur during parsing

}

const p = new Parser("!(A + B.C) + !(A.!B)");
