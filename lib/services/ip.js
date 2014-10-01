module.exports = function(api){

    api.registre('ip', function(req, res){
        
        var ip = req.headers['x-forwarded-for'] || 
                 req.connection.remoteAddress || 
                 req.socket.remoteAddress ||
                 req.connection.socket.remoteAddress;
        
        res.json({'ip': ip});
        
    });
};