const mongoose = require("mongoose");

const sectionSchema = new mongoose .Schema ({
    books: [{type: mongoose.Schema.Types.ObjectId, ref: "book", required: true}],
    name: {type: String, required:true}
}, 
{versionKey: false})

module.exports = mongoose.model("section", sectionSchema);