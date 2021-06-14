 var fs= require('fs');
 var http= require('http');

 var menupage= fs.readFileSync('./index.html');
 var stylepage= fs.readFileSync('./style.css');
 var srciptpage= fs.readFileSync('./script.js');
 var imgpage= fs.readFileSync('./pexels.jpg');
 var bgimg= fs.readFileSync('./Capture.JPG');

 var server= http.createServer((req,res)=> {
     if(req.url === '/'){
         res.setHeader('content-Type','text/html');
         res.write(menupage);
         res.statusCode= 200;
         res.end()
     }
     else if(req.url === '/style.css'){
        res.setHeader('content-Type','text/css');
        res.write(stylepage);
        res.statusCode= 200;
        res.end()
    }
    else if(req.url === '/script.js'){
        res.setHeader('content-Type','text/javascript');
        res.write(srciptpage);
        res.statusCode= 200;
        res.end()
    }
    else if(req.url === '/pexels.jpg'){
        res.setHeader('content-Type','text/jpg');
        res.write(imgpage);
        res.statusCode= 200;
        res.end()
    }
    else if(req.url === '/Capture.JPG'){
        res.setHeader('content-Type','text/JPG');
        res.write(bgimg);
        res.statusCode= 200;
        res.end()
    }
    
 });
 server.listen(3005);
