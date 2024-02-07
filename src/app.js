import express from "express";
import morgan from "morgan";
import { __dirname } from "./utils/dirName.js";
import { main } from "./solver/main.js";
import path from "path";

const app = express();
const port = 3000;

// #######################
//      APP CONFIG
// #######################
// TODO: add morgan, helmet and hpp middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "..", "..", "dist")));

// #######################
//         ROUTES
// #######################
app.post("/api/v1/solve-expression", (req, res) => {
    const { expression } = req.body;
    // TODO: add expression validation
    try {
        const responseObject = main(expression);
        return res.status(200).json({
            ok: true,
            data: responseObject,
        });
    } catch (err) {
        return res.status(400).json({
            ok: false,
            error: "It seems that you enter an invalid expression",
        });
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "dist", "index.html"));
});

app.listen(port, () => {
    console.log("express app started on port", port);
});
