const chalk = require('chalk')

console.log(chalk.green('La vida es bella'))

const express = require('express')
const app = express()
const arreglo = []

app.get('/home',(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})
app.get('/page',(req,res)=>{
    res.send({message:"Hello World!"})

})

app.post('/user',express.json(),(req,res)=>{
    //res.send({message:'Este es el post'})
    arreglo.push(req,body)
})

app.get('/user',(req,res)=>{
    res.send({users:arreglo})
})

app.get('/name',(req,res)=>{
    //console.log(req)
    console.log(req.body)
    res.send()
})

app.listen(30011, () => {
  console.log(chalk.blue('Servidor corriendo'))
})