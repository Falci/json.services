# JSON.Services #


JSON.Services is a testing platform for services utilizing [JavaScript Object Notation (JSON)](http://en.wikipedia.org/wiki/JSON). 
      
To use, make a request to **servicename**.json.services, where servicename is the name of a service listed below

### Services ###
#### Cookie ####

[http://cookie.json.services/?foo=bar](http://cookie.json.services/?foo=bar)
```
{ "foo": "bar" }
```

[http://cookie.json.services/?baz=qux](http://cookie.json.services/?baz=qux)
```
{
  "foo": "bar",
  "baz": "qux"
}
```

#### Date ####
[http://date.json.services](http://date.json.services)
```
{
  "date":"2014-10-05",
  "time":"05:23:26",
  "datetime":"Sun Oct 05 2014 05:23:26 GMT+0000 (UTC)",
  "timestamp":1412486606823
}
```

#### Echo ####
[http://echo.json.services/?foo=bar&baz=qux](http://echo.json.services/?foo=bar&baz=qux)
```
{
  "foo": "bar",
  "baz": "qux"
}
```

#### Header ####
[http://header.json.services](http://header.json.services)

```
{
  "host":"header.json.services",
  "connection":"close",
  "accept":"text/html,
  application/xhtml+xml,
  application/xml;q=0.9,image/webp,*/*;q=0.8",
  "user-agent":"Mozilla/5.0 Chrome/35.0.1916.153 Safari/537.36",
  "dnt":"1",
  "accept-encoding":"gzip,deflate,sdch",
  "accept-language":"pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4",
  "if-none-match":"W/\"257-54e379f9\"",
  "x-request-id":"fdea9df3-38a2-445e-bc83-df60b7876f60",
  "x-forwarded-for":"189.7.19.180",
  "x-forwarded-proto":"http",
  "x-forwarded-port":"80",
  "via":"1.1 vegur",
  "connect-time":"1",
  "x-request-start":"1412485654242",
  "total-route-time":"0"
}}
```

#### IP ####
[http://ip.json.services](http://ip.json.services)
```
{ "ip": "54.243.74.12" }
```
#### MD5 ####
[http://md5.json.services/?original=JSON](http://md5.json.services/?original=JSON)
```
{
  "md5": "0ecd11c1d7a287401d148a23bbd7a2f8",
  "original": "JSON"
}
```
#### MD5 ####
[http://sha1.json.services/?original=JSON](http://sha1.json.services/?original=JSON)
```
{
  "sha1": "031a4e76f0b39d0df073d934da5fc48da8d737e5",
  "original": "JSON"
}
```
#### 404 ####
[http://404.json.services](http://404.json.services)
```
{ "status": "404" }
```
      
### New Features ###
To request new features, please visit [issues page](https://github.com/Falci/json.services/issues/).

Pull requests are wellcome.
