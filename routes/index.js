import {Router} from 'express'
import Oeuvres from '../model/Oeuvres.js'
import oeuvres from '../utils/oeuvres.js'
const router = Router()

router.get("/", async (req, res)=>{
    try {
        const oeuvres = await Oeuvres.find().sort("-date")
        const templateData = {
            title : "Homepage",
            styles : ["index.css"],
            oeuvres : oeuvres
        }
        res.render('index', templateData)
    } catch (error) {
        console.error(error)
    }
})

router.post("/", async (req, res)=>{
    const {oeuvre} = req.body
    let nom;
    if(oeuvre) nom = await Oeuvres.find({oeuvre})
    else nom = await Oeuvres.find()
    const templateData = {
        title : "Homepage",
        styles : ["index.css"],
        oeuvres : oeuvres,
        nom : nom
    }
    res.render('index', templateData)
})

router.get("/gallery", (req, res)=>{
    const templateData = {
        title : "Gallery",
        oeuvres : oeuvres
    }
    res.render('gallery', templateData)
})

router.post('/gallery', async (req, res)=>{
    try {
        const{nom, oeuvre}=req.body
        await new Oeuvres({nom, oeuvre}).save()
        res.redirect("/")
    } catch (error) {
        console.error(error)
    }
})

export default router