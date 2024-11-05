/**
 * Title: Personal Task Manager API
 * Author: Ahmed Ibrahim Ahmed
 * File: fileHandler.js
 * Date: 2024-10-30
 * Description: Provides utility functions to read and write tasks to tasks.json file, simulating data persistence.
 */

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/tasks.json');

// Ensure tasks.json exists; if not, create it with an empty array
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

// Read tasks from JSON file
const readTasks = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading tasks:', err);
        return [];
    }
};

// Write tasks to JSON file
const writeTasks = (tasks) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    } catch (err) {
        console.error('Error writing to the tasks file:', err);
    }
};

module.exports = { readTasks, writeTasks };