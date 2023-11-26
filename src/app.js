import express from "express";
import { __dirname } from "./utils/dirName.js";
import main from "./solver/main.js";

const app = express();
const port = 3000;

// #######################
//      APP CONFIG 
// #######################
// TODO: add morgan, helmet and hpp middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/media", express.static(`${__dirname}/../public`))

// Setting up views with ejs
app.set("view engine", "ejs");
app.set("views", `${__dirname}/../views`);

// #######################
//         ROUTES
// #######################

app.get("/", (_req, res) => {
    return res.render("home", { title: 'Truth Table Generator' });
})
app.post("/", (req, res) => {
    const { expression } = req.body;
    main(expression);
    return res.render("home", { title: 'Truth Table Generator' });
})

app.listen(port, () => {
    console.log("express app started on port", port)
});
