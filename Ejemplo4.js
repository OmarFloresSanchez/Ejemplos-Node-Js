//Se pone una librería.
const http=require("http");

const servidor=http.createServer((req, res)=>{
    res.end("Yo soy Cesar Julius Zepelli.")
});
const puerco=3000;

servidor.listen(puerco, ()=>{
    console.log(`El servidor esta escuchando en el puerco ${puerco}`);
});