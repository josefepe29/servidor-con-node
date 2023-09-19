const http = require('node:http')

const mensajeVerde = require('chalk').green

const host = 'localhost'
const puerto = '8000'

const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const response = {
        nombre: "Jose",
        mensaje: "Mi primer servidor!!"
    }
    res.end(JSON.stringify(response))
}
const server = http.createServer(requestListener)

server.listen(puerto, host, () => {
    console.log(mensajeVerde(`Servidor disponible en ${host}:${puerto}`))
})