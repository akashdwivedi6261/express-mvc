const express = require("express");
const Book = require("../models/book.model");
const CrudOp = require("./crud.controller")

const router = express.Router();

router.get("/", async (req, res) => {
    const {isCheckedOut, author, section} = req.query
    const criteria = {}
    if(isCheckedOut) {
        criteria.isCheckedOut = isCheckedOut
    }
    if(author) {
        criteria.authors = author
    }
    if(section) {
        criteria.section = section
    }
    const Items = await Book.find(criteria);
    res.status(200).json(Items)
})


router.get("/:id", CrudOp(Book).GetOne)
router.post("/", CrudOp(Book).PostOne)
router.patch("/:id",CrudOp(Book).updateOne)
router.delete("/:id", CrudOp(Book).deleteOne)

module.exports = router
