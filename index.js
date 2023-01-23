const express = require("express");
const app = express()
app.use(express.json())
const morgan = require("morgan")

const genres = require("./routes/genres")
const home = require("./routes/home")

app.use(morgan("tiny"))






app.use("/api/genres", genres)
app.use("/", home)



const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`listening to the port ${port}`))