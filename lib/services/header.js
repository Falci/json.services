module.exports = function(api){

    api.registre(['header','headers'], function(req, res){
        
        res.json(req.headers);
        
    });
};