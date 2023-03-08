import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// all routes in here are starting with /users

// GET route to get users
router.get('/', getUsers);

// POST route to create users
router.post('/', createUser);
router.get('/:id', getUser);

// DELETE route for Deleting Users
router.delete('/:id', deleteUser);

// PATCH route for updating users
router.patch('/:id', updateUser);




export default router;

