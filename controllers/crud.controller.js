const Book = require("../models/book.model");

const GetAll = (model) => async (req, res) => {
    
        const Items = await model.find();
        res.status(200).json(Items)
   
}
const GetOne = (model) => async (req, res) => {
    const Item = await model.find(req.params.id);
    res.status(200).json(Item);

}
const PostOne = (model) => async (req, res) => {
    const CreatedItem = await model.create(req.body);
    res.status(200).json(CreatedItem);

}
const updateOne = (model) => async (req, res) => {
    const UpdatedItem = await model.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(UpdatedItem);
    res.status(200).json(UpdatedItem);

}
 const deleteOne = (model) => async (req, res) =>{
    const DeletedItem = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(DeletedItem);

}

module.exports = (model) => ({
    GetAll: GetAll(model),
    PostOne: PostOne(model),
    GetOne: GetOne(model),
    updateOne: updateOne(model),
    deleteOne: deleteOne(model)
})
