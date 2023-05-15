//Se pone una librería.
const http=require("http");
const servidor=http.createServer((req, resp)=>{
    console.log("Hola xd.");
    resp.end("<h1>La paz sea con tigo</h1>");
});

servidor.listen(3000, ()=>{
    console.log("El servidor está listo.");
});