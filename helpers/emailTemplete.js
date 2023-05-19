function emailTemplete(token){
    return `<h1 style="font-family: Arial, Helvetica, sans-serif; font-weight: 700; font-size: 30px; ">Welcome To Backend ${token} </h1> <a style="display: inline-block; font-family: Arial, Helvetica, sans-serif; font-weight: 500; font-size: 20px; padding: 10px; text-decoration: none; background-color: black; color: #fff;" href="#">SUBMIT</a>`;
}

module.exports = emailTemplete;