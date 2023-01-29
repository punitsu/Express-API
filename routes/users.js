import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import {newUser} from '../controllers/users.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.send(users);
    // res.send('Hello');
})

router.post('/', newUser)

router.get('/:id', (req, res) =>{
    const { id } = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
})

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`user with id ${id} has been deleted`);
})

router.patch('/:id', (req, res) => {
    const { id } = users.params;
    const { firstname, lastname, age } = req.body;
    let user = users.find((user) => user.id === id);

    if(firstname){
        user.firstname = firstname;
    }

    if(lastname){
        user.lastname = lastname;
    }

    if(age){
        user.age = age;
    } 

    res.send(`user with id ${user.id} has been updated`);
 })


export default router;