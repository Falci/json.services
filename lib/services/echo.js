module.exports = function(api){

    api.registre(['echo'], function(req, res){
        
        res.json(req.query);
        
    });
};