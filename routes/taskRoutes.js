/**
 * Title: Personal Task Manager API
 * Author: Ahmed Ibrahim Ahmed
 * File: taskRoutes.js
 * Date: 2024-10-30
 * Description: Handles HTTP requests related to tasks, directing them to the appropriate functions in the task controller.
 */

const taskController = require('../controllers/taskController');

const taskRoutes = (req, res) => {
    if (req.method === 'GET' && req.url === '/tasks') {
        taskController.getTasks(req, res);
    } else if (req.method === 'POST' && req.url === '/tasks') {
        taskController.createTask(req, res);
    } else if (req.method === 'PUT' && req.url.startsWith('/tasks/')) {
        taskController.updateTask(req, res);
    } else if (req.method === 'DELETE' && req.url.startsWith('/tasks/')) {
        taskController.deleteTask(req, res);
    }
};

module.exports = taskRoutes;