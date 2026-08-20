import http from "http";

const server = http.createServer((req,res)=>
{
    res.writeHead(404,{
        'content-type':"text/plain",
    });
    res.end("<h1>Welcome to Server");
});

server.listen(3690, () => console.log("Server is running"));