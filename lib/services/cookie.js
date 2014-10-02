module.exports = function(api){

    api.registre(['cookie'], function(req, res){
        
        for(var key in req.query){
            res.cookie(key, req.query[key]);
            req.cookies[key] = req.query[key];
        }
        
        res.json(req.cookies);
        
    });
};