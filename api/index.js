import dotenv from 'dotenv'
import connectDB from '../src/db/index.js'
import { app } from '../src/app.js'



dotenv.config({
    path : './.env'
})


// MONGODB returns a promise when we connect to it
   
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is running at http://localhost:${process.env.PORT}`)                           
    })
