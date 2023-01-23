const express = require("express")
const router = express.Router()


const Genres = [
    {id:1, name: "Action film"},
    {id:2, name: "Adventure film"},
    {id:3, name: "Animated film	"},
    {id:4, name: "Drama"},
    {id:5, name: "Fantasy film"}
]

router.get("/", (req,res)=>{
    res.send(Genres)
})

module.exports = router