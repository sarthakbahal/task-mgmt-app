const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const auth = require('../middleware/auth');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/', auth, getTasks);

router.post('/', auth, [
  body('title').trim().notEmpty().withMessage('Title is required')
], createTask);

router.put('/:id', auth, [
  body('title').trim().notEmpty().withMessage('Title is required'),
  param('id').isMongoId().withMessage('Invalid task ID')
], updateTask);

router.patch('/:id', auth, [
  body('title').optional().trim().notEmpty().withMessage('Title is required'),
  param('id').isMongoId().withMessage('Invalid task ID')
], updateTask);

router.delete('/:id', auth, [
  param('id').isMongoId().withMessage('Invalid task ID')
], deleteTask);

module.exports = router;