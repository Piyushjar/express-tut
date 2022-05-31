const express = require('express');
const multer = require('multer');
const { login , signup } = require('../controllers/authController');

const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)

const fileStorage = multer.diskStorage({
    destination: (req, file,cb) =>{
        cb(null,'./images');
    },
    filename: (req, file,cb) =>{
        cb(null, Date.now()+file.originalname);
    }
})  

const upload = multer({storage: fileStorage});

router.post('/upload', upload.single('image'), (req, res)=>{
    console.log(req.file);
    res.send("Single file uploaded");
});

module.exports = router;