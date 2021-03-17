const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get("/", auth, (req, res) => {
    if(req.user.admin){
        res.send("esse dado so deve ser visto pelo admin")
    }else{
        return res.status(401).send("Access Denied")
    }
})
router.get("/free", auth, (req, res) => {
    res.send("esse dado deve ser visto por ques esta logado")
})

module.exports = router;