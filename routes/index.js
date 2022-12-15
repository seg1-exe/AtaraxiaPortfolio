import {Router} from 'express'
import Oeuvres from '../model/Oeuvres.js'
import oeuvres from '../utils/categories.js'
const router = Router()


//HOME PAGE
router.get("/", async (req, res)=>{
    try {
        const oeuvres = await Oeuvres.find()
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



//GALLERY
router.get("/gallery", async (req, res)=>{
    const oeuvres = await Oeuvres.find()
    const templateData = {
        title : "Gallery",
        styles : ["gallery.css"],
        oeuvres : oeuvres
    }
    res.render('gallery', templateData)
})

router.get("/gallery/:id", async (req, res)=>{
    const id = req.params.id
    const element = await Oeuvres.findById(id)
    const templateData = {
        title : "Gallery",
        styles : ["gallery.css"],
        element : element
    }
    res.render('oneElement', templateData)
})

router.post('/gallery', async (req, res)=>{
    try {
        const{nom, file, description, categories}=req.body
        await new Oeuvres({nom, file, description, categories}).save()
        res.redirect("/")
    } catch (error) {
        console.error(error)
    }
})



//ABOUT
router.get("/about", (req, res)=>{
    const templateData = {
        title : "About",
        styles : ["about.css"],
    }
    res.render('about', templateData)
})
//CONTACT
router.get("/contact", (req, res)=>{
    const templateData = {
        title : "Contact",
        styles : ["contact.css"],
    }
    res.render('contact', templateData)
})
export default router