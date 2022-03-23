const express = require("express");
const mongoose = require("mongoose");
const authorController = require("./controllers/author.controller")
const bookController = require("./controllers/book.controller")
const sectionController = require("./controllers/section.controller")
app = express();
app.use(express.json());


app.use("/authors", authorController)
app.use("/books", bookController)
app.use("/sections", sectionController)

app.listen(8002, async() => {
await mongoose.connect("mongodb+srv://akash:rewa_123@cluster0.a6hwt.mongodb.net/stackoverflow?retryWrites=true&w=majority");

    console.log("server stared on port 8002");
})