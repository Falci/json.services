module.exports = function(api){
    
    var zero = function(n){
        return (n < 10 ? "0" : "") + n;
    };
    
    var getDate = function(date){
        return [
            date.getFullYear(),
            zero(date.getMonth()+1),
            zero(date.getDate())
            ].join("-");
    };
    
    var getTime = function(date){ 
        return [
            zero(date.getHours()),
            zero(date.getMinutes()),
            zero(date.getSeconds())
            ].join(":");
    };

    api.registre(['date','time'], function(req, res){
        
        var date = new Date();
        
        res.json({
            date: getDate(date),
            time: getTime(date),
            datetime: date.toString(),
            timestamp: date.getTime()
        });
        
    });
};