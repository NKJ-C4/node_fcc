const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    // res.write('Welcome')
    // res.end()

    if(req.url === '/about'){
        res.end('Hi I am Nishant')
    }

    res.end(`
    <h1>Eror 404 not found</h1>

    <p><a href="/">Go back</a></p>
    `)
})

server.listen(5000)