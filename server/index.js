const express = require("express")
const app = express()
const PORT = 2021
const {errorHandler} = require('./middleware/errorHandler')
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const path = require("path");
const connectDB = require("../config/database")
const session = require("express-session")
const MongoStore = require("connect-mongo")
require("dotenv").config({ path: "./config/.env" });
url = process.env.DB_STRING
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)
app.use("/api/v2/review", require("./routes/reviewRoutes"))
app.use("/api/v2/user", require("./routes/userRoutes"))

app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
      mongoUrl: process.env.DB_STRING
      }),
    })
    )

app.listen(PORT, (req, res)=>{
    console.log(`listening on ${PORT}`)
})