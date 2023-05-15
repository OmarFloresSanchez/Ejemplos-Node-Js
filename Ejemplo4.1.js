//Se declara la librería de expres.
const express=require("express");
//Se hace una constante de tipo expres.
const app=express();
//A lo de antes se le hace una funcion get.
app.get("/", function(req, res){
    res.send("End of ¡THE WORLD!")
});
//Esto asi solito se ejecuta con node, asi con el local host 3000.
app.listen(3000)