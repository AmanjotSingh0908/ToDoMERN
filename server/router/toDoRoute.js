const controller = require("../controller/toDoController");

const router = require("express").Router();

router.get('/', controller.getToDo)
router.post('/save', controller.saveToDo)
router.post('/update', controller.updateToDo)
router.post('/delete', controller.deleteToDo)

module.exports = router