function authMiddleware(req,res,next){
    if(!req.session.userLoger){
        return res.redirect("login")
    }
    next();
}

module.exports = authMiddleware