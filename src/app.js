import express from "express";
import cors from "cors"
import morgan from "morgan"
import { __dirname } from "./utils/dirName.js";
import { main } from "./solver/main.js";

const app = express();
const port = 3000;

// #######################
//      APP CONFIG 
// #######################
// TODO: add morgan, helmet and hpp middlewares
app.use(express.json());
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.urlencoded({ extended: false }));
app.use("/media", express.static(`${__dirname}/../public`))

// Setting up views with ejs
app.set("view engine", "ejs");
app.set("views", `${__dirname}/../views`);

// #######################
//         ROUTES
// #######################
app.post("/api/v1/solve-expression", (req, res) => {
    const { expression } = req.body;
    const responseObject = main(expression);
    return res.status(200).json(responseObject)
})

app.listen(port, () => {
    console.log("express app started on port", port)
});
