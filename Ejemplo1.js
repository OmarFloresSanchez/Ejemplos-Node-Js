//Se pone una librería.
const http=require("http");
const servidor=http.createServer((req, resp)=>{
    resp.end("Yo soy William Julius Zepelli.")
});
servidor.listen(3000, ()=>{
    console.log("El servidor está listo.");
});