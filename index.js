const express = require('express')
const app = express();
const functions = require('./functions/functions')


app.get('/teste',
(req,res)=>{
    res.send('rota TESTE ativada')
}
)

app.get('/pdfReader', 
(req,res)=>{
let docUrl = req.query.docUrl;
return functions.readPdf(docUrl, (frase)=> res.send(frase))
}
)



app.listen(
    3000,
    ()=>{
        console.log('o servidor está conectado!')
    }
)