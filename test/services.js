var app = require('../app')
  , request = require('supertest')
  , should = require('should');


describe('Services', function(){
    
    it('Should response status 404', function(){
        
       request(app)
          .get('/404')
          .end(function(err, res){
            if (err) throw err;

            res.should.have.property('status',404);
            res.should.be.json;
            
          }); 
        
    });
    
    it('Cookies must be used in response', function(){
        
        request(app)
          .get('/cookie?baz=qux')
          .set('Cookie', ['foo=bar'])
          .end(function(err, res){
            if (err) throw err;

            res.should.be.json;
            res.body.should.have.property('foo', 'bar');
            res.body.should.have.property('baz', 'qux');
            
          }); 
    });
    
    it('Should respond with the date and time', function(){
        
        request(app)
          .get('/date')
          .end(function(err, res){
            if (err) throw err;
                
            res.should.be.json;
            res.body.should.have.property(['timestamp']);
            res.body.should.have.property(['date']);
            res.body.should.have.property(['time']);
            res.body.should.have.property(['datetime']);
            
            var fromTimestamp = new Date( res.body.timestamp );
            fromTimestamp.setMilliseconds(0);
            
            var dateParts = res.body.date.split('-');
            var timeParts = res.body.time.split(':');
            var fromDateTime = new Date( dateParts[0], dateParts[1]-1, dateParts[2], timeParts[0], timeParts[1], timeParts[2], 0);
            
            res.body.datetime.should.equal(fromTimestamp.toString());
            res.body.datetime.should.equal(fromDateTime.toString());
            
          }); 
    });
    
    it('Must respond with get parameters', function(){
        
        request(app)
          .get('/echo?foo=bar')
          .end(function(err, res){
            if (err) throw err;

            res.should.be.json;
            res.body.should.have.property('foo', 'bar');
            
          }); 
    });
    
    it('Must respond with page header', function(){
        
        request(app)
          .get('/header')
          .end(function(err, res){
            if (err) throw err;

            res.should.be.json;
            res.body.should.have.property('host');
            res.body.should.have.property('connection');
            res.body.should.have.property('accept-encoding');
            
          }); 
    });
    
    it('Must respond with page header', function(){
        
        request(app)
          .get('/ip')
          .end(function(err, res){
            if (err) throw err;

            res.should.be.json;
            res.body.should.have.property('ip', '127.0.0.1');
            
          }); 
    });
    
    it('Must respond with MD5 hash', function(){
        
        request(app)
          .get('/md5?original=Some text with space')
          .end(function(err, res){
            if (err) throw err;

            res.should.be.json;
            res.body.should.have.property('md5', '05d1ed7c63b103e7383ab474e57eadf8');
            res.body.should.have.property('original', 'Some text with space');
            
          }); 
    });
    
    it('Must respond with SHA1 hash', function(){
        
        request(app)
          .get('/sha1?original=Some text with space')
          .end(function(err, res){
            if (err) throw err;

            res.should.be.json;
            res.body.should.have.property('sha1', '17de13f8c3f9f8f75393a01fb5b2a7420c996dcd');
            res.body.should.have.property('original', 'Some text with space');
            
          }); 
    });
    
    
});