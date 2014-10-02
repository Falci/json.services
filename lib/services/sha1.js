var crypto = require('crypto');

module.exports = function(api){

    api.registre(['sha1'], function(req, res){
        var original = req.query.original || 'JSON Test';
        
        var sha1 = crypto.createHash('sha1');
        
        res.json({
            sha1: sha1.update(original).digest('hex'),
            original: original
        });
        
    });
};