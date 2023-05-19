const express = require('express')
const Detail = require('../../Model/data.js')
const router = express.Router()
const bcrypt = require('bcrypt');
const emailVelidation = require('../../helpers/emailVelidation.js');
const emailVerification = require('../../helpers/emailVerification.js');
const emailTemplete = require('../../helpers/emailTemplete.js');
const jwt = require('jsonwebtoken');

router.post('/registration', async function (req, res) {

    const {name, email, subject, password} = req.body;

    if(!name){
        return res.json({error: "Name is Empty"})
    }

    if(emailVelidation(email)){
        return res.json({error: "Invalid Email"})
    }

    if(!subject){
        return res.json({error: "Subject is Empty"})
    }

    let userExistUserCheck = await Detail.find({})

    if(userExistUserCheck.length > 0){
        return res.json({error: "Email already use"})
    }

    const token = jwt.sign({ email }, process.env.JWTTOKEN);

    bcrypt.hash(password, 10, function(err, hash) {
        const user = new Detail({
            name,
            email,
            subject, 
            password: hash
        })
        user.save()
        emailVerification(user.email, "Backend Practice", emailTemplete(token))
        res.send(user)
    });

    
})

router.get("/detail", async function(req, res){
    const{authorization} = req.headers
    const decoded = jwt.verify(authorization, process.env.JWTTOKEN);
    const updateUser = await Detail.findOneAndUpdate({email: decoded.email}, {verified: true}, 
    {new: true})
    res.json(updateUser);

})

module.exports = router;
  