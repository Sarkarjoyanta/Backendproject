const jwt = require('jsonwebtoken');
function token(email){
    const token = jwt.sign({ email }, process.env.JWTTOKEN);
    return token;
}

module.exports=token;