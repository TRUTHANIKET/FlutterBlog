module.exports.signup_get=(req,res)=>{
   res.send("signup get");
}

module.exports.signup_post=(req,res)=>{
    console.log(req.body)
    res.send(`yeah it worked `);
}