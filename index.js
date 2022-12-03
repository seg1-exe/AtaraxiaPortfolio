import path from 'path'
import express from "express"
import router from './routes/index.js'
import dbConnect from './database/connect.js'
import exp from 'constants'

const app = express()

dbConnect()

app.use("/public", express.static(path.join(process.cwd(), "public")))

app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.use(router)
app.listen(8080, () => console.log("port 8080"))