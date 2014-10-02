var crypto = require('crypto');

module.exports = function(api){

    api.registre(['md5'], function(req, res){
        var original = req.query.original || 'JSON Test';
        
        var md5 = crypto.createHash('md5');
        
        res.json({
            md5: md5.update(original).digest('hex'),
            original: original
        });
        
    });
};