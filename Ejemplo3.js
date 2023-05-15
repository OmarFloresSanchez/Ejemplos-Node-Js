//Se pone una librería.
const http=require("http");
const servidor=http.createServer((req, res)=>{
    console.log("El cliente hiso una petición.");
    console.log("La url es: ",req.url);
    console.log("El metodo es: ",req.method);
    console.log("Los jeders son: ",req.headers);
    res.end("Fin del llamado.");
});
const puerco=3000;
servidor.listen(puerco, ()=>{
    console.log(`El servidor esta escuchando ${puerco}`);
});