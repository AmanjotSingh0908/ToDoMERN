import axios from 'axios'

const getAllToDo = (setToDo) => {
    axios
    .get("https://todomernbackend-dn07.onrender.com")
    .then(({data}) => {
        console.log('data ===> ', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {
 
    axios
    .post("https://todomernbackend-dn07.onrender.com/save", {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    }).catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
 
    axios
    .post("https://todomernbackend-dn07.onrender.com/update", {_id:toDoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
 
    axios
    .post("https://todomernbackend-dn07.onrender.com/delete", { _id })
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
        
    })
    .catch((err) => console.log(err))

}

export {getAllToDo, addToDo, updateToDo, deleteToDo}