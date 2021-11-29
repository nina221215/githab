const chalk = require('chalk')
const express=require('express')
const app=express()
app.listen(3000,()=>{ 
    console.log('Servidor Corriendo')
})

console.log(((chalk.blue)("Hola","Mundo","Irreal")))