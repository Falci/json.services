module.exports = function(api){

    api.registre(['404'], function(req, res){
        
        res.status(404);
        
    });
};