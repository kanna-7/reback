import { triggerAsyncId } from 'async_hooks';

const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.post('/post', (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(400).send('Email and password can not be empty');
            return;
        }
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Internal Server Error');
        return;
        
    }
    res.status(200).send('Login successful');
    })
    

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}   );
