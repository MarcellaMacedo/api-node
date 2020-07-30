const express = require('express')

const app = express()

app.listen(3000)

/*const port = 3000

app.listen(port,()=> {
    console.log('Servidor rodando na porta ${port}')
})*/

app.get('/',(req,res)=>{
    res.send("Minha primeira rota")
})


//Acessar no localhost com /teste 
app.get('/teste',(req,res)=>{
    res.send("Meu primeiro teste")
})


//Acessar no localhost com /teste 
app.get('/teste/2',(req,res)=>{
    res.send("Meu segundo teste")
})

