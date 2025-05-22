import express from 'express';

const app = express();
import cors from 'cors';
app.use(cors({
    origin : process.env.CORS_ORIGIN
}))

// here we're configuring the express to allow json requests with a certain limit
app.use(express.static('dist'))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended : true, limit : '16kb'}))

import dataRoute from './routes/data.route.js'
app.use('/api/v1', dataRoute)
app.get('/',(req, res) => {
    console.log("OK good")
    res.send("bye bye")
})



export {app}