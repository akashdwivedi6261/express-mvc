const mongoose = require("mongoose");

const authorSchema = new mongoose .Schema ({
  first_name: {type: String, required: true, unique: true},
  last_name: {type: String, required: true, unique: true},
  books: [{type: mongoose.Schema.Types.ObjectId, ref: "book", required: true}]

},
{versionKey: false}
)

module.exports = mongoose.model("author", authorSchema);