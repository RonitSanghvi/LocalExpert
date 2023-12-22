const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const db = require('./db')

let PORT = db.port

// Import Routes
const authRoutes = require('./Routes/authRoutes')
const destinationRoutes = require('./Routes/destinationRoutes')

// App Initialization
const app = express()

// Connect to Mongodb Atlas
mongoose.connect(db.remoteUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB Atlas!')
}).catch((err)=> {
    console.log("Error Occured: ", err)
})

// Middleware
    app.use(bodyParser.json({limit: '15mb'}))
    app.use(bodyParser.urlencoded({
        extended:true
    }))
    app.use(cors());
    // app.use(express.json())


// Routes :- Always create it below "app.use(bodyParser.json())" line
    app.use("/", authRoutes)
    app.use("/", destinationRoutes)


// PORT
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
