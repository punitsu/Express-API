import { v4 as uuidv4 } from 'uuid';

let users = []

export const newUser =  (req,res) => {
    console.log('post route reached');
    const user = req.body;

    users.push({ ...user, id: uuidv4()})

    res.send(`User with the name ${user.firstname} added to the database`); 
}