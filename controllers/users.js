import { v4 as uuidv4 } from 'uuid';

let users = [];

// function to get users
export const getUsers = (req, res) => {
    res.send(users);

}
export const getUser = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

// function to create users
export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
}


// function for for Deleting Users
export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id)

    res.send(`User with the id ${id} deleted from the database.`);
}


// function for for updating users
export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user) => user.id == id);

    if (!userToBeUpdated) {
        return res.status(404).send(`User with the id ${id} not found.`);
    }

    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;

    res.send(`User with the id ${id} has been updated.`);
}