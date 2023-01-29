import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName : "Doe",
        age : 25
    },
    {
        firstName: "Punit",
        lastName : "Sureka",
        age : 21
    },

]

router.get('/', (req, res) => {
    console.log(users);
    res.send('Hello');
})

router.post('/', (req,res) => {
    
})

export default router;