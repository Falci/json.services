var load = require('express-load')

var registred = {};

var api = {
    registre: function(sub, func){
        if(sub instanceof Array){
            sub.forEach(function(s){
               api.registre(s, func); 
            });
            return true;
        }
        
        registred[sub] = func;
    },
    
    run: function(req, res, next){
        var subdomain = req.subdomains[0] || false;
        var param = req.params.service;
        
        var service = subdomain in registred ? subdomain : param;
        
        if(service in registred){
            return registred[service](req, res);
        }
        
        next();
    }
};

load('./lib/services').into(api);

module.exports = api;