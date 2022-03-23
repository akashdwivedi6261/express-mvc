const express = require("express");
const Section = require("../models/section.model");
const CrudOp = require("./crud.controller")
const Book = require("../models/book.model");

const router = express.Router();

router.get("/", CrudOp(Section).GetAll)
router.get("/:id", CrudOp(Section).GetOne)
// router.get("/:id/books", async (req, res) => {
//   const Books = await Book.find({section: req.params.id})
//   res.status(200).json(Books)
// })

router.get("/:id/books", async (req, res) => {
    const {isCheckedOut} = req.query
    const criteria = {
        section: req.params.id
    }
    

    if(isCheckedOut) {
         criteria.isCheckedOut = isCheckedOut
         console.log("criteria", criteria);
    }
    
    const Books = await Book.find(criteria)
    res.status(200).json(Books)
  })
router.post("/", CrudOp(Section).PostOne)
router.patch("/:id",CrudOp(Section).updateOne)
router.delete("/:id", CrudOp(Section).deleteOne)

module.exports = router
