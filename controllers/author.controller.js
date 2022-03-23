const express = require("express");
const Author = require("../models/author.model");
const CrudOp = require("./crud.controller")
const Book = require("../models/book.model");

const router = express.Router();

router.get("/", CrudOp(Author).GetAll)

//Read books for an author by an author id
router.get("/:id/books", async (req, res) => {
   
    const Books = await Book.find({authors: req.params.id});
    res.status(200).json(Books)
})
router.get("/:id", CrudOp(Author).GetOne)
router.post("/", CrudOp(Author).PostOne)
router.patch("/:id",CrudOp(Author).updateOne)
router.delete("/:id", CrudOp(Author).deleteOne)

module.exports = router