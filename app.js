
//declaraciones

const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.port || 3000;
//configuraciones - respuestas para el cliente

/*
app.get == Solicitamos un recurso (registro,imagen,archivo,etc) del servidor
app.post == Creamos un recurso en el servidor
app.delete ==  Cuando eliminamos un recurso del servidor
app.put == Cuando actualizamos un recurso en el servidor */
app.get("/",(req,res)=>{
    res.send('Pagina principal. Servidor de Node.js con express');
});//htdocs = public_html
app.get('*',(req,res)=>{
    res.send('404 | Pagina no encontrada');
});

//procesos - respuestas para el desarrollador
app.listen(port,(   )=>{
    console.log('Servidor corriendo en el puerto: ', port);
});

