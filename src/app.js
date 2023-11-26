import express from "express";
import { __dirname } from "./utils/dirName.js";

const app = express();
const port = 3000;

// #######################
//      APP CONFIG 
// #######################
// TODO: add morgan, helmet and hpp middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up views with ejs
app.set("view engine", "ejs");
app.set("views", `${__dirname}/../views`);

// #######################
//         ROUTES
// #######################

app.get("/", (req, res) => {
    return res.render("home", { title: 'HOME' });
})
app.listen(port, () => {
    console.log("express app started on port", port)
});
