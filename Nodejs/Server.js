const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Ibrahim</h1>')
    res.end()
}).listen(5000,console.log('Server Works'))
