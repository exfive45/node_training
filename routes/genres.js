const express = require("express")
const router = express.Router()
const Joi = require('joi')


const Genres = [
    {id:1, name: "Action film"},
    {id:2, name: "Adventure film"},
    {id:3, name: "Animated film	"},
    {id:4, name: "Drama"},
    {id:5, name: "Fantasy film"}
]


const vidlySchema = Joi.object({

    name: Joi.string().min(3).max(15).required()
    })
    

router.get("/", (req, res)=>{
    res.send(Genres)
    

})

router.get("/:id", (req, res)=>{
    const Genre = Genres.find(g=> g.id === parseInt(req.params.id))
    if (!Genre) res.status(404).send("je ne trouve pas le film qu evous cherchez")
    res.send(Genre)

})

router.post("/", (req, res)=>{

    const Genre = {
        id: Genres.length+1,
        name: req.body.name
    }

    const {error} = vidlySchema.validate(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    Genres.push(Genre)
    res.send(Genre)


})

router.put("/:id", (req, res) =>
{const Genre = Genres.find(g=> g.id === parseInt(req.params.id))
    
    if (!Genre) res.status(404).send("je ne trouve pas le film qu evous cherchez")
    res.send(Genre);

    const {error} = vidlySchema.validate(req.body)
    if(error) return res.status(404).send(error.details)



})

router.delete("/:id", (req, res)=>{
    const Genre = Genres.find(g=> g.id === parseInt(req.params.id))

    const index = Genres.indexOf(Genre)
    Genres.splice(index)
    res.send(Genre)

})

module.exports= router