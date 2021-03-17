require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_CONNECTION_URL, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }).then(()=>{
            console.log("Connected to the Database. Yayzow!");
        }).catch(error => console.log('falhou', error))

app.use("/user", express.json(), userRouter)

app.use("/admin", express.json(), adminRouter)


app.listen(process.env.PORT, ()=>{ console.log("server running on port " + process.env.PORT)})