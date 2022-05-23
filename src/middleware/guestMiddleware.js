function guestMiddleware(req,res,next){
    if(req.session.userLoger){
        return res.redirect("home")
    }
    next();
}

module.exports = guestMiddleware