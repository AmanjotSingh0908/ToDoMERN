const ToDoModel = require('../models/toDoModel')

module.exports.getToDo = async (req,res) => {
    console.log("Inside getToDo")
    const toDo = await ToDoModel.find()
    console.log(toDo);
    res.send(toDo)
}

module.exports.saveToDo = async (req,res) => {

    const { text } =  req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("todo added successfully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async (req,res) => {

    const { _id, text } = req.body
    ToDoModel.findByIdAndUpdate(_id, {text})
    .then(() => res.status(200).send("Updation Successfull"))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req,res) => {

    const { _id } = req.body
    ToDoModel.findByIdAndDelete(_id)
    .then(() => res.status(200).send("Deletion Successfull"))
    .catch((err) => console.log(err))
}
