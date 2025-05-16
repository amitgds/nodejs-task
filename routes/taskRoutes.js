// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const validate = require('../middleware/validationMiddleware');
const { updateTaskSchema, createTaskSchema, assignTaskSchema, categorySchema, commentSchema } = require('../validations/taskValidation');

// Routes
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', validate(createTaskSchema), taskController.createTask);
router.put('/:id', validate(updateTaskSchema), taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

// Additional Routes
router.post('/filter', taskController.filterTasks); 
router.post('/paginate', taskController.paginateTasks); 
router.post('/:id/assign', validate(assignTaskSchema), taskController.assignTask);
router.post('/:id/category', validate(categorySchema), taskController.addCategoryToTask);
router.post('/:id/comment', validate(commentSchema), taskController.addCommentToTask);

module.exports = router;
