# sparkles: Truth Table Generator :sparkles:
It is an API that can generate truth tables of logical expressions.

### Introduction
This project is basically a truth table generator, that can generate truth tables from logical expressions. Right now it just creates a table for the main expression
The main purpose behind this project is to avoid making truth tables again and again in our DLD assignments :smirk_cat:. The web will have a "copy to clipboard" button from where users can easily copy the whole table and paste it into their .docx files with ease!

**This project is built using:**
1. Nodejs (for core functionality)
2. Expressjs (for API)

**Hopefully will implement the following features:**
1. Advance expression parsing
2. Database for storing asked questions
3. Implement an "Already asked questions" section for quick access to answers

## Setup

```
# clone the project
git clone https://www.github.com/mrx7355608/truthtable-generator.git

# cd into folder
cd truthtable-generator

# change branch from main to api
git checkout api

# Install dependencies
yarn

# Run api
yarn dev
```

## Documentation

### :space_invader: Solving Expressions

The endpoint for solving expressions is:
```http
POST /api/v1/solve-expression
```

API expects a json data that contains an `expression` key

```json
{
    "expression": "your_expression_here"
}
```
The response is an array that contains values of a,b,c,d and expression answer according to those values
```json
[
    {
        "a": 0,
        "b": 0,
        "answer": 0
    },
    {
        "a": 0,
        "b": 1,
        "answer": 1,
    }
]
```
