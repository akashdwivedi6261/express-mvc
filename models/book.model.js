const mongoose = require("mongoose");

const bookSchema = new mongoose .Schema ({
  name: {type: String, required: true, unique: true},
  body: {type: String, required: true, unique: true},
  authors: [{type: mongoose.Schema.Types.ObjectId, ref: "author", required: true, min: 1}],
  section:{type: mongoose.Schema.Types.ObjectId, ref: "author", required: true},
  isCheckedOut: {type: Boolean, requird: true}
})

module.exports = mongoose.model("book", bookSchema);