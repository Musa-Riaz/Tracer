import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config({path: './.env'});

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true}));


// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})