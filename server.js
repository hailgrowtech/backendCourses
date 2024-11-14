const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');



// env

dotenv.config();


const app = express();

// middleware

app.use(express.json());
app.use(cors());


const courseRoutes = require('./routes/courseRoutes');

app.use('/api/courses', courseRoutes);

app.get('/', (req,res) =>{
    res.send('Chlra hai bhai Server');
});

const PORT = process.env.PORT || 5069;
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('MongoDB Connected');
    app.listen(PORT, () => {
        console.log(`Server is Running on ${PORT}`);
    });
}).catch((error) =>{
    console.error('MongoDB Connection Failure', error.message);
    process.exit(1);
});